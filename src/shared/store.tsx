import { createContext, useContext } from "react";
import { BehaviorSubject } from "rxjs";
import ThaiGlyph from "./models/thai-glyph";

const listGlyph$ = new BehaviorSubject<ThaiGlyph[]>([]);
const selectedGlyph$ = new BehaviorSubject<ThaiGlyph | undefined>(undefined);

// fetch("http://localhost:3000/api/glyphs")
//   .then((res) => res.json())
//   .then((data) => listGlyph$.next(data))
//   .then(() => selectedGlyph$.next(listGlyph$.value[0]));

const GlyphsContext = createContext({
  listGlyph$,
  selectedGlyph$,
});

export const useGlyphs = () => useContext(GlyphsContext);