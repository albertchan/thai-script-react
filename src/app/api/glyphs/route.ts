export async function GET() {
  const baseUrl = `${process.env.PROTOCOL_SCHEME}${process.env.VERCEL_URL}`;
  const res = await fetch(`${baseUrl}/thai-script.json`);
  const data = await res.json();

  return Response.json(data, {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
