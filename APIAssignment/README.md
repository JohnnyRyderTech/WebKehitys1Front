# MovieFinder

AJAX-sovellus, joka hakee elokuvia ja TV-sarjoja TMDB REST API:sta.

## Ominaisuudet

- Haku AJAXilla ilman sivun uudelleenlatausta
- Elokuva / TV-sarja -valinta
- Vuosisuodatin
- Hakutulokset korteiksi muotoiltuna
- Lisätiedot modaalissa
- Native JavaScript, ei ulkoisia JS-kirjastoja
- Kaikki event handlerit lisätään dynaamisesti JavaScriptillä

## Teknologiat

- HTML
- CSS
- JavaScript (native)
- Netlify Functions
- TMDB API

## Asennus paikallisesti

1. Luo TMDB-tili ja hae **API Read Access Token**.
2. Asenna Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```
3. Avaa projektikansio ja lisää ympäristömuuttuja:
   ```bash
   netlify env:set TMDB_BEARER_TOKEN oma_token_tahan
   ```
4. Käynnistä projekti:
   ```bash
   netlify dev
   ```

## Julkaisu

1. Vie projekti GitHubiin.
2. Yhdistä repo Netlifyyn.
3. Lisää Netlifyyn ympäristömuuttuja:
   - Key: `TMDB_BEARER_TOKEN`
   - Value: oma TMDB API Read Access Token
4. Deployaa sivu.
5. Lisää tähän README-tiedostoon julkaistun sovelluksen linkki.

## Julkaistu sovellus

Lisää tähän Netlify-linkkisi:

`https://oma-sovellus.netlify.app`

## Tärkeä huomio

TMDB-tokenia ei pidä tallentaa suoraan selaimen puolen JavaScriptiin. Tässä projektissa selain kutsuu Netlify Function -reititystä, joka tekee varsinaisen pyynnön TMDB:lle.

## TMDB-attribuutio

This product uses the TMDB API but is not endorsed or certified by TMDB.
