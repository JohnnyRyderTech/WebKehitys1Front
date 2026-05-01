// Last.fm requires a free API key. Create one here: https://www.last.fm/api/account/create
const API_KEY = "YOUR_LASTFM_API_KEY_HERE";
const BASE_URL = "https://ws.audioscrobbler.com/2.0/";

const artistSelect = document.querySelector("#artistSelect");
const searchForm = document.querySelector("#searchForm");
const artistInput = document.querySelector("#artistInput");
const albumGrid = document.querySelector("#albumGrid");
const artistTitle = document.querySelector("#artistTitle");
const statusText = document.querySelector("#statusText");

// All event handlers are added dynamically with JavaScript.
document.addEventListener("DOMContentLoaded", () => {
  artistSelect.addEventListener("change", () => fetchArtistAlbums(artistSelect.value));
  searchForm.addEventListener("submit", handleSearch);
  fetchArtistAlbums(artistSelect.value);
});

function handleSearch(event) {
  event.preventDefault();

  const artistName = artistInput.value.trim();

  if (!artistName) {
    showMessage("Please write an artist name before searching.");
    return;
  }

  fetchArtistAlbums(artistName);
  artistInput.value = "";
}

async function fetchArtistAlbums(artistName) {
  if (API_KEY === "YOUR_LASTFM_API_KEY_HERE") {
    showMessage("Add your Last.fm API key to script.js before using the app.");
    return;
  }

  setLoadingState(artistName);

  try {
    // AJAX request 1: fetch top albums for the selected/searched artist.
    const albumsUrl = buildUrl({
      method: "artist.gettopalbums",
      artist: artistName,
      limit: 8,
      autocorrect: 1,
      format: "json"
    });

    const albumsResponse = await fetch(albumsUrl);
    const albumsData = await albumsResponse.json();

    if (albumsData.error) {
      throw new Error(albumsData.message);
    }

    const albums = albumsData.topalbums?.album || [];

    if (albums.length === 0) {
      showMessage(`No albums found for ${artistName}. Try another artist.`);
      return;
    }

    // AJAX requests 2: fetch extra album info and tracklists for each album.
    const albumsWithDetails = await Promise.all(
      albums.map((album) => fetchAlbumInfo(artistName, album))
    );

    displayAlbums(artistName, albumsWithDetails);
  } catch (error) {
    showMessage(`Something went wrong: ${error.message}`);
  }
}

async function fetchAlbumInfo(artistName, album) {
  try {
    const albumInfoUrl = buildUrl({
      method: "album.getinfo",
      artist: artistName,
      album: album.name,
      autocorrect: 1,
      format: "json"
    });

    const response = await fetch(albumInfoUrl);
    const data = await response.json();

    return {
      name: album.name,
      artist: album.artist?.name || artistName,
      image: getLargestImage(album.image),
      listeners: album.listeners || data.album?.listeners || "Not available",
      playcount: data.album?.playcount || "Not available",
      url: album.url,
      tracks: getTracks(data.album?.tracks?.track)
    };
  } catch (error) {
    // If one album detail request fails, still show the basic album card.
    return {
      name: album.name,
      artist: album.artist?.name || artistName,
      image: getLargestImage(album.image),
      listeners: album.listeners || "Not available",
      playcount: "Not available",
      url: album.url,
      tracks: []
    };
  }
}

function buildUrl(params) {
  const url = new URL(BASE_URL);
  url.search = new URLSearchParams({ api_key: API_KEY, ...params }).toString();
  return url;
}

function displayAlbums(artistName, albums) {
  albumGrid.innerHTML = "";
  artistTitle.textContent = `${artistName} albums`;
  statusText.textContent = `Showing popular albums and track information from Last.fm.`;

  albums.forEach((album) => {
    const card = document.createElement("article");
    card.className = "album-card";

    const trackItems = album.tracks.length
      ? album.tracks.map((track) => `<li>${escapeHtml(track)}</li>`).join("")
      : "<li>Tracklist not available</li>";

    card.innerHTML = `
      <img src="${album.image}" alt="Album cover for ${escapeHtml(album.name)}" />
      <div class="album-content">
        <h3>${escapeHtml(album.name)}</h3>
        <p class="meta">
          Artist: ${escapeHtml(album.artist)}<br>
          Listeners: ${formatNumber(album.listeners)}<br>
          Playcount: ${formatNumber(album.playcount)}
        </p>
        <strong>Example songs:</strong>
        <ol class="track-list">${trackItems}</ol>
        <a class="album-link" href="${album.url}" target="_blank" rel="noopener">Open on Last.fm</a>
      </div>
    `;

    albumGrid.appendChild(card);
  });
}

function getTracks(trackData) {
  if (!trackData) return [];

  const tracks = Array.isArray(trackData) ? trackData : [trackData];
  return tracks.slice(0, 5).map((track) => track.name);
}

function getLargestImage(images = []) {
  const image = [...images].reverse().find((img) => img["#text"]);
  return image?.["#text"] || "https://via.placeholder.com/500x500?text=No+Image";
}

function formatNumber(value) {
  const number = Number(value);
  return Number.isNaN(number) ? value : number.toLocaleString("en-US");
}

function setLoadingState(artistName) {
  artistTitle.textContent = `Loading ${artistName}...`;
  statusText.textContent = "Requesting live JSON data from Last.fm API.";
  albumGrid.innerHTML = `<div class="message">Loading albums...</div>`;
}

function showMessage(message) {
  statusText.textContent = message;
  albumGrid.innerHTML = `<div class="message">${escapeHtml(message)}</div>`;
}

function escapeHtml(text) {
  return String(text).replace(/[&<>'"]/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#039;",
      '"': "&quot;"
    };
    return entities[character];
  });
}
