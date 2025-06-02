import glyphs from "../../../../public/thai-script.json";

export async function GET() {
  return Response.json(glyphs, {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
