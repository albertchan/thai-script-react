import { createContext, useContext } from "react";
import { BehaviorSubject } from "rxjs";
import ThaiGlyph from "./models/thai-glyph";

const listGlyph$ = new BehaviorSubject<ThaiGlyph[]>([]);
const selectedGlyph$ = new BehaviorSubject<ThaiGlyph | undefined>(undefined);
const selectedGlyphIndex$ = new BehaviorSubject<number>(0)
const selectedFamily$ = new BehaviorSubject<string | undefined>(undefined);
const selectedSound$ = new BehaviorSubject<string | undefined>(undefined);
const selectedMode$ = new BehaviorSubject<string | undefined>(undefined);

const GlyphsContext = createContext({
  listGlyph$,
  selectedGlyphIndex$,
  selectedGlyph$,
});

const OptionsContext = createContext({
  selectedFamily$,
  selectedMode$,
  selectedSound$,
})

export const useGlyphs = () => useContext(GlyphsContext);
export const useOptions = () => useContext(OptionsContext)