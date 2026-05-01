import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '../db';
import type { Occasion, Slot } from '../db/types';

export const useGarmentsBySlot = (slot: Slot, occasion?: Occasion | null) =>
  useLiveQuery(
    () => {
      const q = db.garments.where('slot').equals(slot);
      if (!occasion) return q.toArray();
      return q.and(g => g.occasions.includes(occasion)).toArray();
    },
    [slot, occasion],
    [],
  );

export const useAllGarments = () =>
  useLiveQuery(() => db.garments.orderBy('createdAt').reverse().toArray(), [], []);

export const useAllOutfits = () =>
  useLiveQuery(() => db.outfits.orderBy('createdAt').reverse().toArray(), [], []);

export const useGarment = (id: string | undefined) =>
  useLiveQuery(() => (id ? db.garments.get(id) : undefined), [id]);
