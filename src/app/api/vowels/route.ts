import data from "../../../../public/thai-vowels.json";

export async function GET() {
  return Response.json(data, {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
