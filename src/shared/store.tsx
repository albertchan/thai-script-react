import { createContext, useContext } from "react";
import { BehaviorSubject } from "rxjs";
import ThaiGlyph from "./models/thai-glyph";

const listGlyph$ = new BehaviorSubject<ThaiGlyph[]>([]);

// Get glyphs from database
fetch("/thai-script.json")
  .then((res) => res.json())
  .then((data) => listGlyph$.next(data));

const GlyphsContext = createContext({
  listGlyph$,
});

export const useGlyphs = () => useContext(GlyphsContext);