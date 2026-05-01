export default async (request) => {
  try {
    const url = new URL(request.url);
    const query = url.searchParams.get('query')?.trim();
    const mediaType = url.searchParams.get('mediaType') === 'tv' ? 'tv' : 'movie';
    const year = url.searchParams.get('year')?.trim();
    const token = process.env.TMDB_BEARER_TOKEN;

    if (!token) {
      return jsonResponse({ error: 'TMDB_BEARER_TOKEN puuttuu.' }, 500);
    }

    if (!query) {
      return jsonResponse({ error: 'Hakusana puuttuu.' }, 400);
    }

    const endpoint = new URL(`https://api.themoviedb.org/3/search/${mediaType}`);
    endpoint.searchParams.set('query', query);
    endpoint.searchParams.set('language', 'fi-FI');
    endpoint.searchParams.set('include_adult', 'false');
    endpoint.searchParams.set('page', '1');

    if (year) {
      endpoint.searchParams.set(mediaType === 'movie' ? 'year' : 'first_air_date_year', year);
    }

    const response = await fetch(endpoint, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (!response.ok) {
      const errorText = await response.text();
      return jsonResponse({ error: 'TMDB-haku epäonnistui.', details: errorText }, response.status);
    }

    const data = await response.json();

    // Palautetaan korkeintaan 12 tulosta, jotta käyttöliittymä pysyy siistinä.
    return jsonResponse({
      results: Array.isArray(data.results) ? data.results.slice(0, 12) : []
    });
  } catch (error) {
    return jsonResponse({ error: 'Palvelinvirhe.', details: error.message }, 500);
  }
};

function jsonResponse(payload, status = 200) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store'
    }
  });
}
