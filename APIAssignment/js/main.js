// Haetaan valmiit HTML-elementit käyttöön.
const form = document.querySelector('#searchForm');
const queryInput = document.querySelector('#query');
const mediaTypeSelect = document.querySelector('#mediaType');
const yearInput = document.querySelector('#year');
const resultsContainer = document.querySelector('#results');
const statusBox = document.querySelector('#status');
const resultMeta = document.querySelector('#resultMeta');
const modalRoot = document.querySelector('#modalRoot');

// TMDB-kuvien peruspolku. Yksinkertainen tapa opiskelijaprojektiin.
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
const BACKDROP_BASE_URL = 'https://image.tmdb.org/t/p/w780';

// Lisätään kaikki tapahtumankäsittelijät dynaamisesti JavaScriptillä.
form.addEventListener('submit', handleSearchSubmit);
resultsContainer.addEventListener('click', handleResultsClick);
modalRoot.addEventListener('click', handleModalClick);
document.addEventListener('keydown', handleEscapeClose);

// Tehdään yksi oletushaku sivun latauduttua, jotta sivu ei näytä tyhjältä.
window.addEventListener('DOMContentLoaded', () => {
  queryInput.value = 'Dune';
  form.requestSubmit();
});

async function handleSearchSubmit(event) {
  event.preventDefault();

  const query = queryInput.value.trim();
  const mediaType = mediaTypeSelect.value;
  const year = yearInput.value.trim();

  if (!query) {
    setStatus('Anna ensin hakusana.');
    resultMeta.textContent = '';
    renderEmptyState('Ei vielä hakua.');
    return;
  }

  setStatus('Haetaan tietoja palvelimelta...');
  resultMeta.textContent = '';
  resultsContainer.innerHTML = '';

  try {
    const params = new URLSearchParams({ query, mediaType });

    if (year) {
      params.set('year', year);
    }

    const response = await fetch(`/.netlify/functions/search?${params.toString()}`);

    if (!response.ok) {
      throw new Error('Hakupyyntö epäonnistui.');
    }

    const data = await response.json();
    const results = Array.isArray(data.results) ? data.results : [];

    renderResults(results, mediaType);

    setStatus(results.length ? 'Haku valmis.' : 'Hakutuloksia ei löytynyt.');
    resultMeta.textContent = `Tuloksia: ${results.length}`;
  } catch (error) {
    console.error(error);
    setStatus('Tapahtui virhe haettaessa tietoja. Tarkista asetukset ja yritä uudelleen.');
    renderEmptyState('Tuloksia ei voitu ladata.');
  }
}

function renderResults(items, mediaType) {
  if (!items.length) {
    renderEmptyState('Hakutuloksia ei löytynyt tällä haulla.');
    return;
  }

  const cardsMarkup = items
    .map((item) => {
      const title = item.title || item.name || 'Nimetön sisältö';
      const date = item.release_date || item.first_air_date || 'Päivämäärä puuttuu';
      const year = date !== 'Päivämäärä puuttuu' ? date.slice(0, 4) : '—';
      const posterPath = item.poster_path
        ? `${IMAGE_BASE_URL}${item.poster_path}`
        : 'https://placehold.co/500x750/0f172a/e5e7eb?text=No+Image';
      const overview = item.overview
        ? `${item.overview.slice(0, 120)}${item.overview.length > 120 ? '…' : ''}`
        : 'Kuvausta ei ole saatavilla.';
      const rating = typeof item.vote_average === 'number' ? item.vote_average.toFixed(1) : '—';

      return `
        <article class="card">
          <div class="poster-wrap">
            <img src="${posterPath}" alt="${escapeHtml(title)} juliste" loading="lazy" />
          </div>
          <div class="card-body">
            <div>
              <p class="card-meta">${mediaType === 'movie' ? 'Elokuva' : 'TV-sarja'} • ${year}</p>
              <h3 class="card-title">${escapeHtml(title)}</h3>
            </div>
            <p class="card-overview">${escapeHtml(overview)}</p>
            <div class="card-footer">
              <span class="rating-badge">⭐ ${rating}</span>
              <button
                type="button"
                class="details-btn"
                data-id="${item.id}"
                data-type="${mediaType}"
              >
                Lisätiedot
              </button>
            </div>
          </div>
        </article>
      `;
    })
    .join('');

  resultsContainer.innerHTML = cardsMarkup;
}

function renderEmptyState(message) {
  resultsContainer.innerHTML = `<div class="empty-state">${escapeHtml(message)}</div>`;
}

async function handleResultsClick(event) {
  const button = event.target.closest('.details-btn');

  if (!button) {
    return;
  }

  const id = button.dataset.id;
  const mediaType = button.dataset.type;

  setStatus('Haetaan tarkempia tietoja...');

  try {
    const params = new URLSearchParams({ id, mediaType });
    const response = await fetch(`/.netlify/functions/details?${params.toString()}`);

    if (!response.ok) {
      throw new Error('Lisätietojen haku epäonnistui.');
    }

    const item = await response.json();
    openModal(item, mediaType);
    setStatus('Lisätiedot ladattu.');
  } catch (error) {
    console.error(error);
    setStatus('Lisätietojen lataus epäonnistui.');
  }
}

function openModal(item, mediaType) {
  const title = item.title || item.name || 'Nimetön sisältö';
  const releaseDate = item.release_date || item.first_air_date || 'Ei tiedossa';
  const genres = Array.isArray(item.genres) && item.genres.length
    ? item.genres.map((genre) => genre.name).join(', ')
    : 'Ei tiedossa';
  const runtime = item.runtime
    ? `${item.runtime} min`
    : item.number_of_seasons
      ? `${item.number_of_seasons} kautta`
      : 'Ei tiedossa';
  const score = typeof item.vote_average === 'number' ? item.vote_average.toFixed(1) : '—';
  const posterPath = item.poster_path
    ? `${BACKDROP_BASE_URL}${item.poster_path}`
    : 'https://placehold.co/780x1170/0f172a/e5e7eb?text=No+Image';
  const overview = item.overview || 'Kuvausta ei ole saatavilla.';

  modalRoot.innerHTML = `
    <div class="modal-overlay" data-close="true">
      <div class="modal-content" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
        <div class="modal-grid">
          <div class="modal-poster">
            <img src="${posterPath}" alt="${escapeHtml(title)} kuva" />
          </div>
          <div class="modal-body">
            <p class="card-meta">${mediaType === 'movie' ? 'Elokuva' : 'TV-sarja'}</p>
            <h3 id="modalTitle">${escapeHtml(title)}</h3>
            <p>${escapeHtml(overview)}</p>
            <ul class="detail-list">
              <li><strong>Julkaisu:</strong> ${escapeHtml(releaseDate)}</li>
              <li><strong>Genre:</strong> ${escapeHtml(genres)}</li>
              <li><strong>Kesto / laajuus:</strong> ${escapeHtml(runtime)}</li>
              <li><strong>Arvosana:</strong> ${escapeHtml(score)}</li>
              <li><strong>Alkuperäinen kieli:</strong> ${escapeHtml(item.original_language || 'Ei tiedossa')}</li>
            </ul>
          </div>
        </div>
        <div class="modal-actions">
          <button type="button" class="close-btn" data-close="true">Sulje</button>
        </div>
      </div>
    </div>
  `;

  document.body.style.overflow = 'hidden';
}

function handleModalClick(event) {
  const closeTarget = event.target.closest('[data-close="true"]');

  if (!closeTarget) {
    return;
  }

  closeModal();
}

function handleEscapeClose(event) {
  if (event.key === 'Escape' && modalRoot.innerHTML.trim()) {
    closeModal();
  }
}

function closeModal() {
  modalRoot.innerHTML = '';
  document.body.style.overflow = '';
}

function setStatus(message) {
  statusBox.textContent = message;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}
