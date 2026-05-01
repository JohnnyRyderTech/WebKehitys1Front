// Finnkino Movie Information App
// Native JavaScript only. All event handlers are added dynamically in this file.

// Finnkino XML API currently works through HTTP endpoints.
// HTTPS hosts such as Netlify can block direct HTTP requests, so fetchXml()
// includes an HTTPS proxy fallback for reading the same Finnkino XML data.
const FINNKINO_BASE_URL = "http://www.finnkino.fi/xml";
const XML_PROXY_URL = "https://api.allorigins.win/raw?url=";

// Optional OMDb support:
// 1. Get your own free API key from http://www.omdbapi.com/apikey.aspx
// 2. Replace the empty string below with your key.
// The app works without OMDb because Finnkino already gives movie images and schedule data.
const OMDB_API_KEY = "";

const theatreSelect = document.querySelector("#theatreSelect");
const searchInput = document.querySelector("#searchInput");
const clearSearchBtn = document.querySelector("#clearSearchBtn");
const moviesGrid = document.querySelector("#moviesGrid");
const messageBox = document.querySelector("#messageBox");
const resultsTitle = document.querySelector("#resultsTitle");
const resultsMeta = document.querySelector("#resultsMeta");

let allShows = [];
let selectedTheatreName = "";

// Starts the app when the HTML document is ready.
document.addEventListener("DOMContentLoaded", initApp);

function initApp() {
  loadTheatres();

  // Dynamic event listener: loads a new schedule when the selected theatre changes.
  theatreSelect.addEventListener("change", () => {
    const theatreId = theatreSelect.value;
    selectedTheatreName = theatreSelect.options[theatreSelect.selectedIndex].textContent;

    if (theatreId) {
      loadSchedule(theatreId);
    }
  });

  // Dynamic event listener: filters visible movies while the user types.
  searchInput.addEventListener("input", () => {
    renderMovies(filterShowsBySearch(allShows));
  });

  // Dynamic event listener: clears the custom search field.
  clearSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    renderMovies(allShows);
    searchInput.focus();
  });
}

async function loadTheatres() {
  showMessage("Loading theatre list...", false);

  try {
    const xmlDocument = await fetchXml(`${FINNKINO_BASE_URL}/TheatreAreas/`);
    const theatres = [...xmlDocument.querySelectorAll("TheatreArea")]
      .map((area) => ({
        id: getText(area, "ID"),
        name: getText(area, "Name")
      }))
      // Remove the general "Valitse alue/teatteri" option.
      .filter((theatre) => theatre.id && theatre.id !== "1029");

    theatreSelect.innerHTML = `<option value="">Choose a theatre</option>`;

    theatres.forEach((theatre) => {
      const option = document.createElement("option");
      option.value = theatre.id;
      option.textContent = theatre.name;
      theatreSelect.appendChild(option);
    });

    hideMessage();
  } catch (error) {
    showMessage("Could not load theatres. Please check your connection or try again later.");
    console.error(error);
  }
}

async function loadSchedule(theatreId) {
  showMessage("Loading movie schedule...", false);
  moviesGrid.innerHTML = "";
  resultsTitle.textContent = selectedTheatreName;
  resultsMeta.textContent = "Loading showtimes...";

  try {
    const url = `${FINNKINO_BASE_URL}/Schedule/?area=${theatreId}`;
    const xmlDocument = await fetchXml(url);
    const shows = [...xmlDocument.querySelectorAll("Show")].map(parseShow);

    allShows = combineShowsByMovie(shows);
    hideMessage();
    renderMovies(filterShowsBySearch(allShows));
  } catch (error) {
    showMessage("Could not load movie schedule. Please try another theatre.");
    console.error(error);
  }
}

async function fetchXml(url) {
  try {
    // First try the real Finnkino API address directly.
    return await requestXml(url);
  } catch (directError) {
    console.warn("Direct Finnkino request failed. Trying HTTPS proxy fallback.", directError);

    // Fallback for Netlify / HTTPS pages, where browsers often block HTTP XML requests.
    const proxiedUrl = `${XML_PROXY_URL}${encodeURIComponent(url)}`;
    return await requestXml(proxiedUrl);
  }
}

async function requestXml(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  const xmlText = await response.text();
  const xmlDocument = new DOMParser().parseFromString(xmlText, "application/xml");

  // Browser XML parser creates parsererror if the returned text is not valid XML.
  if (xmlDocument.querySelector("parsererror")) {
    throw new Error("Returned data was not valid XML.");
  }

  return xmlDocument;
}
function parseShow(showElement) {
  const rawStartTime = getText(showElement, "dttmShowStart");

  return {
    id: getText(showElement, "EventID"),
    title: getText(showElement, "Title"),
    originalTitle: getText(showElement, "OriginalTitle"),
    theatre: getText(showElement, "Theatre"),
    auditorium: getText(showElement, "TheatreAuditorium"),
    rating: getText(showElement, "Rating"),
    genres: getText(showElement, "Genres"),
    lengthMinutes: getText(showElement, "LengthInMinutes"),
    startTime: rawStartTime,
    formattedTime: formatShowTime(rawStartTime),
    image: getText(showElement, "EventLargeImagePortrait") || getText(showElement, "EventSmallImagePortrait")
  };
}

function combineShowsByMovie(shows) {
  const movieMap = new Map();

  shows.forEach((show) => {
    const key = show.id || show.title;

    if (!movieMap.has(key)) {
      movieMap.set(key, {
        ...show,
        showtimes: []
      });
    }

    movieMap.get(key).showtimes.push({
      time: show.formattedTime,
      auditorium: show.auditorium
    });
  });

  return [...movieMap.values()].sort((a, b) => a.title.localeCompare(b.title));
}

function filterShowsBySearch(shows) {
  const searchTerm = searchInput.value.trim().toLowerCase();

  if (!searchTerm) {
    return shows;
  }

  return shows.filter((movie) => {
    const searchableText = `${movie.title} ${movie.originalTitle} ${movie.genres}`.toLowerCase();
    return searchableText.includes(searchTerm);
  });
}

function renderMovies(movies) {
  moviesGrid.innerHTML = "";

  resultsTitle.textContent = selectedTheatreName || "Choose a theatre";
  resultsMeta.textContent = `${movies.length} movie${movies.length === 1 ? "" : "s"} found`;

  if (!movies.length) {
    showMessage("No movies found with this search. Try another title or clear the search field.");
    return;
  }

  hideMessage();

  movies.forEach((movie) => {
    const movieCard = createMovieCard(movie);
    moviesGrid.appendChild(movieCard);
  });
}

function createMovieCard(movie) {
  const article = document.createElement("article");
  article.className = "movie-card";

  const posterWrap = document.createElement("div");
  posterWrap.className = "poster-wrap";

  const poster = document.createElement("img");
  poster.src = movie.image || "https://via.placeholder.com/500x750?text=No+Image";
  poster.alt = `${movie.title} movie poster`;
  poster.loading = "lazy";

  const rating = document.createElement("span");
  rating.className = "rating-badge";
  rating.textContent = movie.rating ? `Rating ${movie.rating}` : "No rating";

  posterWrap.append(poster, rating);

  const content = document.createElement("div");
  content.className = "movie-content";

  const title = document.createElement("h3");
  title.textContent = movie.title;

  const description = document.createElement("p");
  description.className = "movie-description";
  description.textContent = movie.originalTitle && movie.originalTitle !== movie.title
    ? `Original title: ${movie.originalTitle}`
    : "Finnkino schedule movie.";

  const infoList = document.createElement("ul");
  infoList.className = "info-list";
  infoList.append(
    createInfoItem("Genre", movie.genres || "Not available"),
    createInfoItem("Length", movie.lengthMinutes ? `${movie.lengthMinutes} min` : "Not available"),
    createInfoItem("Theatre", movie.theatre || selectedTheatreName)
  );

  const showtimes = document.createElement("div");
  showtimes.className = "showtimes";

  movie.showtimes.slice(0, 8).forEach((show) => {
    const time = document.createElement("span");
    time.className = "time-pill";
    time.textContent = `${show.time} ${show.auditorium ? `• ${show.auditorium}` : ""}`;
    showtimes.appendChild(time);
  });

  if (movie.showtimes.length > 8) {
    const moreTimes = document.createElement("span");
    moreTimes.className = "time-pill";
    moreTimes.textContent = `+${movie.showtimes.length - 8} more`;
    showtimes.appendChild(moreTimes);
  }

  content.append(title, description, infoList, showtimes);
  article.append(posterWrap, content);

  // Optional: enrich one movie card with OMDb data when an API key has been added.
  if (OMDB_API_KEY) {
    addOmdbData(movie.title, content);
  }

  return article;
}

async function addOmdbData(title, contentElement) {
  try {
    const url = `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&t=${encodeURIComponent(title)}`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.Response === "True") {
      const omdbInfo = document.createElement("p");
      omdbInfo.className = "movie-description";
      omdbInfo.textContent = `IMDb: ${data.imdbRating || "N/A"} • Year: ${data.Year || "N/A"}`;
      contentElement.appendChild(omdbInfo);
    }
  } catch (error) {
    console.error("OMDb request failed", error);
  }
}

function createInfoItem(label, value) {
  const item = document.createElement("li");
  item.innerHTML = `<strong>${label}:</strong> ${value}`;
  return item;
}

function getText(parent, selector) {
  return parent.querySelector(selector)?.textContent?.trim() || "";
}

function formatShowTime(dateString) {
  if (!dateString) {
    return "Time unknown";
  }

  const date = new Date(dateString);

  return date.toLocaleTimeString("fi-FI", {
    hour: "2-digit",
    minute: "2-digit"
  });
}

function showMessage(text, isError = true) {
  messageBox.textContent = text;
  messageBox.classList.remove("hidden");
  messageBox.style.borderColor = isError ? "rgba(255, 107, 107, 0.35)" : "rgba(248, 201, 76, 0.35)";
  messageBox.style.background = isError ? "rgba(255, 107, 107, 0.12)" : "rgba(248, 201, 76, 0.10)";
  messageBox.style.color = isError ? "#ffd0d0" : "#ffe9a6";
}

function hideMessage() {
  messageBox.classList.add("hidden");
}
