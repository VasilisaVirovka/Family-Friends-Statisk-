
const API_URL = "https://api.thedogapi.com/v1/favourites";

const headers = {
  "x-api-key": process.env.API_KEY,
  "Content-Type": "application/json",
};

// Hent gemte favoritter
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const subId = searchParams.get("sub_id");

  if (!subId) {
    return Response.json(
      { error: "Missing sub_id" },
      { status: 400 },
    );
  }

  const response = await fetch(
    `${API_URL}?sub_id=${encodeURIComponent(subId)}`,
    { headers, cache: "no-store" },
  );

  const data = await response.json();

  return Response.json(data, { status: response.status });
}

// Tilføj favorit
export async function POST(request) {
  const body = await request.json();

  if (!body.image_id || !body.sub_id) {
    return Response.json(
      { error: "Missing image_id or sub_id" },
      { status: 400 },
    );
  }

  const response = await fetch(API_URL, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  });

  const data = await response.json();

  return Response.json(data, { status: response.status });
}

// Fjern favorit
export async function DELETE(request) {
  const { searchParams } = new URL(request.url);
  const favouriteId = searchParams.get("id");

  if (!favouriteId) {
    return Response.json(
      { error: "Missing favourite ID" },
      { status: 400 },
    );
  }

  const response = await fetch(
    `${API_URL}/${encodeURIComponent(favouriteId)}`,
    {
      method: "DELETE",
      headers,
    },
  );

  if (!response.ok) {
    const data = await response.json();

    return Response.json(data, { status: response.status });
  }

  return new Response(null, { status: 204 });
}

