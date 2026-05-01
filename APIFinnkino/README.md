# Movie Information App

A native JavaScript movie information web app that uses the live Finnkino XML API to show ongoing movies and showtimes by selected theatre.

## Live demo

Netlify link: ADD-YOUR-NETLIFY-LINK-HERE

## Features

- Loads theatre areas from the Finnkino REST/XML API
- User can select a theatre from a dropdown menu
- Shows current movie posters, titles, genres, ratings, length and showtimes
- Custom search input filters movies by title, original title or genre
- Responsive card layout with custom CSS styling
- All event handlers are added dynamically in `app.js`
- Native JavaScript only, no external JavaScript libraries
- Optional OMDb API support can be enabled with an API key

## APIs used

Finnkino XML API:

- `http://www.finnkino.fi/xml/TheatreAreas/`
- `http://www.finnkino.fi/xml/Schedule/?area=THEATRE_ID`

Note: Finnkino uses HTTP XML endpoints. If the app is deployed to an HTTPS host like Netlify, browsers may block direct HTTP requests. The JavaScript includes an HTTPS proxy fallback so the same Finnkino XML data can still be loaded.

Optional OMDb API:

- `https://www.omdbapi.com/`

## Project structure

```text
movie-info-app/
├── index.html
├── styles.css
├── app.js
└── README.md
```

## How to use

1. Open `index.html` in a browser.
2. Select a theatre from the dropdown list.
3. Browse the movie cards and showtimes.
4. Use the search field to filter movies.

## How to enable OMDb information

1. Get a free API key from OMDb.
2. Open `app.js`.
3. Add the key here:

```js
const OMDB_API_KEY = "YOUR_API_KEY_HERE";
```

The app works without OMDb because Finnkino already provides the movie schedule, images and basic movie information.

## Deployment

The project can be deployed to Netlify:

1. Push the project to GitHub.
2. Log in to Netlify.
3. Choose **Add new site** → **Import an existing project**.
4. Connect your GitHub repository.
5. Use these settings:
   - Build command: leave empty
   - Publish directory: `/`
6. Deploy the site.
7. Copy the published Netlify link and add it to this README.

## Course requirements checklist

- [x] AJAX request to a live API
- [x] API response saved and processed in JavaScript
- [x] Selected data displayed on the page
- [x] User interface has dropdown and input field
- [x] Native JavaScript only
- [x] Code comments included
- [x] Dynamic event handlers
- [x] Custom CSS layout and styling
- [x] README file included
