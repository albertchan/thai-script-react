import { createContext, useContext } from "react";
import { BehaviorSubject } from "rxjs";
import ThaiGlyph from "./models/thai-glyph";

const listGlyph$ = new BehaviorSubject<ThaiGlyph[]>([]);
const selectedId$ = new BehaviorSubject<number>(1);

// Get glyphs from database
fetch("/thai-script.json")
  .then((res) => res.json())
  .then((data) => listGlyph$.next(data));

const GlyphsContext = createContext({
  listGlyph$,
  selectedId$,
});

export const useGlyphs = () => useContext(GlyphsContext);