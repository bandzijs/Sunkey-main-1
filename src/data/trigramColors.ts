import { Trigram } from './geneKeyTrigrams';

export const trigramColors: Record<Trigram, string> = {
  Heaven: "#E8F4F8",
  Earth: "#E8D5E8",
  Water: "#A8D5F5",
  Fire: "#F5C5C0",
  Thunder: "#B5E5E5",
  Mountain: "#D5E5D5",
  Wind: "#F5F5B8",
  Lake: "#FFF8D8"
};

export const trigramRoots: Record<Trigram, number> = {
  Heaven: 1,
  Earth: 2,
  Water: 29,
  Fire: 30,
  Thunder: 51,
  Mountain: 52,
  Wind: 57,
  Lake: 58
};
