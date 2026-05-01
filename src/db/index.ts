import Dexie, { type Table } from 'dexie';
import type { Garment, Outfit } from './types';

class ClosetDB extends Dexie {
  garments!: Table<Garment, string>;
  outfits!:  Table<Outfit, string>;

  constructor() {
    super('closet');
    this.version(1).stores({
      garments: 'id, slot, type, *occasions, *weather, fabric, createdAt',
      outfits:  'id, occasion, createdAt',
    });
  }
}

export const db = new ClosetDB();
