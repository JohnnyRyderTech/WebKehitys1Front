# Music Album Finder

Music Album Finder is a native JavaScript AJAX project that uses the live Last.fm JSON API. The user can choose an artist from a dropdown list or search with a custom artist name. The app shows popular albums, album covers, listener counts, play counts and example songs from each album.

## Live app

Netlify link: add your published Netlify URL here.

## Features

- Live AJAX requests using `fetch()`
- Artist dropdown search
- Custom artist search input
- Album cards with images and music information
- Tracklist preview for each album
- Responsive layout
- Native JavaScript only
- Dynamically added event handlers
- Commented code

## APIs used

This project uses the Last.fm API.

Main methods:

- `artist.gettopalbums` gets popular albums for an artist.
- `album.getinfo` gets detailed album information and tracklists.

## How to use

1. Open `index.html` in the browser.
2. Choose an artist from the dropdown or write your own artist name in the search field.
3. The app fetches live album data from Last.fm and displays album information on the page.

The Last.fm API key has already been added to `script.js`. The shared secret is not used here because this is a frontend browser project, and secrets should not be exposed in client-side code.

## Deployment

1. Create a GitHub repository.
2. Upload `index.html`, `style.css`, `script.js` and `README.md`.
3. Go to Netlify.
4. Choose **Add new site** → **Import an existing project**.
5. Connect your GitHub repository.
6. Deploy the site.
7. Copy the Netlify link and add it to this README.

## Project structure

```text
music-album-finder/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Author

Johnny
