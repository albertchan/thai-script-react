import { createContext, useContext } from "react";
import { BehaviorSubject } from "rxjs";
import ThaiGlyph from "./models/thai-glyph";

const listGlyph$ = new BehaviorSubject<ThaiGlyph[]>([]);
const selectedGlyph$ = new BehaviorSubject<ThaiGlyph | undefined>(undefined);
const selectedFamily$ = new BehaviorSubject<string | undefined>(undefined);

const GlyphsContext = createContext({
  listGlyph$,
  selectedGlyph$,
});

const OptionsContext = createContext({
  selectedFamily$,
})

export const useGlyphs = () => useContext(GlyphsContext);
export const useOptions = () => useContext(OptionsContext)