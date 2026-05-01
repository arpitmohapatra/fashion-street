import { create } from 'zustand';
import type { Garment, Occasion } from '../db/types';

interface OutfitStore {
  occasionFilter: Occasion | null;
  topIdx: number;
  outerIdx: number;
  bottomIdx: number;

  tops: Garment[];
  outers: Garment[];
  bottoms: Garment[];

  setOccasionFilter: (o: Occasion | null) => void;
  setTops:    (items: Garment[]) => void;
  setOuters:  (items: Garment[]) => void;
  setBottoms: (items: Garment[]) => void;

  nextTop:    () => void;
  prevTop:    () => void;
  nextOuter:  () => void;
  prevOuter:  () => void;
  nextBottom: () => void;
  prevBottom: () => void;

  shuffle: () => void;
  loadOutfit: (topId?: string, outerId?: string, bottomId?: string) => void;
}

const clamp = (i: number, len: number) => ((i % len) + len) % len;

export const useOutfitStore = create<OutfitStore>((set, get) => ({
  occasionFilter: null,
  topIdx: 0,
  outerIdx: 0,
  bottomIdx: 0,
  tops: [],
  outers: [],
  bottoms: [],

  setOccasionFilter: (o) => set({ occasionFilter: o, topIdx: 0, outerIdx: 0, bottomIdx: 0 }),
  setTops:    (items) => set({ tops: items, topIdx: 0 }),
  setOuters:  (items) => set({ outers: items, outerIdx: 0 }),
  setBottoms: (items) => set({ bottoms: items, bottomIdx: 0 }),

  nextTop:    () => set(s => ({ topIdx: clamp(s.topIdx + 1, Math.max(s.tops.length, 1)) })),
  prevTop:    () => set(s => ({ topIdx: clamp(s.topIdx - 1, Math.max(s.tops.length, 1)) })),
  nextOuter:  () => set(s => ({ outerIdx: clamp(s.outerIdx + 1, s.outers.length + 1) })),
  prevOuter:  () => set(s => ({ outerIdx: clamp(s.outerIdx - 1, s.outers.length + 1) })),
  nextBottom: () => set(s => ({ bottomIdx: clamp(s.bottomIdx + 1, Math.max(s.bottoms.length, 1)) })),
  prevBottom: () => set(s => ({ bottomIdx: clamp(s.bottomIdx - 1, Math.max(s.bottoms.length, 1)) })),

  shuffle: () => {
    const { tops, outers, bottoms } = get();
    set({
      topIdx:    tops.length    ? Math.floor(Math.random() * tops.length)    : 0,
      outerIdx:  Math.floor(Math.random() * (outers.length + 1)), // +1 for "none"
      bottomIdx: bottoms.length ? Math.floor(Math.random() * bottoms.length) : 0,
    });
  },

  loadOutfit: (topId, outerId, bottomId) => {
    const { tops, outers, bottoms } = get();
    const topIdx    = topId    ? tops.findIndex(g => g.id === topId)    : 0;
    const outerIdx  = outerId  ? outers.findIndex(g => g.id === outerId) + 1 : 0; // 0 = none
    const bottomIdx = bottomId ? bottoms.findIndex(g => g.id === bottomId) : 0;
    set({
      topIdx:    topIdx    < 0 ? 0 : topIdx,
      outerIdx:  outerIdx  < 0 ? 0 : outerIdx,
      bottomIdx: bottomIdx < 0 ? 0 : bottomIdx,
    });
  },
}));
