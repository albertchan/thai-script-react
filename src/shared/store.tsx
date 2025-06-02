import { createContext, useContext } from "react";
import { BehaviorSubject } from "rxjs";
import ThaiGlyph from "./models/thai-glyph";

const listGlyph$ = new BehaviorSubject<ThaiGlyph[]>([]);
const selectedId$ = new BehaviorSubject<number>(1);
const selectedGlyph$ = new BehaviorSubject<ThaiGlyph | null>(null);

fetch("http://localhost:3000/api/glyphs")
  .then((res) => res.json())
  .then((data) => listGlyph$.next(data));

const GlyphsContext = createContext({
  listGlyph$,
  selectedId$,
  selectedGlyph$,
});

export const useGlyphs = () => useContext(GlyphsContext);