export default interface ThaiVowel {
  id: number;
  glyph: string;
  name: string;
  description: string;
  transcript: string;
  type: string;
  soundStart: string;
  soundEnd: string;
  toneClass: string;
  url: string;
  data: Record<string, unknown>;
}
