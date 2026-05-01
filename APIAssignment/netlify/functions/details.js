export default async (request) => {
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get('id')?.trim();
    const mediaType = url.searchParams.get('mediaType') === 'tv' ? 'tv' : 'movie';
    const token = process.env.TMDB_BEARER_TOKEN;

    if (!token) {
      return jsonResponse({ error: 'TMDB_BEARER_TOKEN puuttuu.' }, 500);
    }

    if (!id) {
      return jsonResponse({ error: 'ID puuttuu.' }, 400);
    }

    const endpoint = new URL(`https://api.themoviedb.org/3/${mediaType}/${id}`);
    endpoint.searchParams.set('language', 'fi-FI');

    const response = await fetch(endpoint, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (!response.ok) {
      const errorText = await response.text();
      return jsonResponse({ error: 'TMDB-lisätietojen haku epäonnistui.', details: errorText }, response.status);
    }

    const data = await response.json();
    return jsonResponse(data);
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
