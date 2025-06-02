export default interface ThaiGlyph {
  id: number;
  unicode: string;
  glyph: string;
  name: string;
  description: string;
  transcript: string;
  phonemeType: string;
  soundStart: string;
  soundEnd: string;
  url: string;
  data: Record<string, unknown>;
}