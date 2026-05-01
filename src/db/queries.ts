import { db } from './index';
import type { Garment, Occasion, Outfit, Slot } from './types';

export const addGarment = (g: Garment) => db.garments.add(g);
export const updateGarment = (id: string, changes: Partial<Garment>) => db.garments.update(id, changes);
export const deleteGarment = (id: string) => db.garments.delete(id);

export const getGarmentsBySlot = (slot: Slot, occasion?: Occasion) => {
  const q = db.garments.where('slot').equals(slot);
  if (!occasion) return q.toArray();
  return q.and(g => g.occasions.includes(occasion)).toArray();
};

export const getAllGarments = () => db.garments.orderBy('createdAt').reverse().toArray();

export const addOutfit = (o: Outfit) => db.outfits.add(o);
export const deleteOutfit = (id: string) => db.outfits.delete(id);
export const getAllOutfits = () => db.outfits.orderBy('createdAt').reverse().toArray();

export const exportData = async () => {
  const [garments, outfits] = await Promise.all([
    db.garments.toArray(),
    db.outfits.toArray(),
  ]);
  return JSON.stringify({ garments, outfits }, null, 2);
};

export const importData = async (json: string) => {
  const { garments, outfits } = JSON.parse(json) as { garments: Garment[]; outfits: Outfit[] };
  await db.transaction('rw', db.garments, db.outfits, async () => {
    await db.garments.bulkPut(garments);
    await db.outfits.bulkPut(outfits);
  });
};

export const clearAllData = () =>
  db.transaction('rw', db.garments, db.outfits, async () => {
    await db.garments.clear();
    await db.outfits.clear();
  });
