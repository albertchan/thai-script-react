export default interface ThaiGlyph {
  id: number;
  unicode?: string;
  glyph: string;
  name: string;
  description: string;
  transcript: string;
  type?: string;
  soundStart: string;
  soundEnd: string;
  toneClass: string;
  url: string;
  data: Record<string, unknown>;
  isActive?: boolean;
  isGroup?: boolean;
}