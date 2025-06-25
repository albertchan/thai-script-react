import Option from "./models/option";
import ToggleMode from "./models/toggle-mode";

export const CONSONANTS_FAMILY = [
  'low',
  'mid',
  'high'
];

export const OTHERS_FAMILY = [
  'diacritic',
  'short',
  'long',
  'diphthongs',
  'extra',
  'numeral',
  'consonant',
  'vowel',
];

export const DEFAULT_VIEW_MODE = "grid";

export const DEFAULT_OPTION = "all";

export const OPTIONS_CONSONANT: Option[] = [
  { id: "all", name: "All" },
  { id: "mid", name: "Mid" },
  { id: "high", name: "High" },
  { id: "low", name: "Low" },
];

export const OPTIONS_VOWEL: Option[] = [
  { id: "all", name: "All" },
  { id: "short", name: "Short" },
  { id: "long", name: "Long" },
  { id: "diphthongs", name: "Diphthongs" },
  { id: "extra", name: "Extra" },
];

export const OPTIONS_GLYPH: Option[] = [
  { id: "all", name: "All" },
  { id: "consonant", name: "Consonants" },
  { id: "mid", name: "Consonants (Mid)" },
  { id: "high", name: "Consonants (High)" },
  { id: "low", name: "Consonants (Low)" },
  { id: "vowel", name: "Vowels" },
  { id: "numeral", name: "Numerals" },
];

export const VIEW_MODES: ToggleMode[] = [
  { id: 'grid', label: "Grid" },
  { id: 'table', label: "Table" }
];
