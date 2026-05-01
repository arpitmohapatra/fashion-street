import type { GarmentType, Slot } from '../db/types';

export const SLOT_OF: Record<GarmentType, Slot> = {
  tshirt: 'top', halfshirt: 'top', shirt: 'top', polo: 'top',
  sweatshirt: 'outer', hoodie: 'outer', sweater: 'outer',
  jacket: 'outer', blazer: 'outer', coat: 'outer',
  shorts: 'bottom', pants: 'bottom', chinos: 'bottom', jeans: 'bottom', skirt: 'bottom',
};

export const slotOf = (type: GarmentType): Slot => SLOT_OF[type];

export const GARMENT_LABELS: Record<GarmentType, string> = {
  tshirt: 'T-Shirt', halfshirt: 'Half Shirt', shirt: 'Shirt', polo: 'Polo',
  sweatshirt: 'Sweatshirt', hoodie: 'Hoodie', sweater: 'Sweater',
  jacket: 'Jacket', blazer: 'Blazer', coat: 'Coat',
  shorts: 'Shorts', pants: 'Pants', chinos: 'Chinos', jeans: 'Jeans', skirt: 'Skirt',
};

export const TOPS: GarmentType[]  = ['tshirt', 'halfshirt', 'shirt', 'polo'];
export const OUTERS: GarmentType[] = ['sweatshirt', 'hoodie', 'sweater', 'jacket', 'blazer', 'coat'];
export const BOTTOMS: GarmentType[] = ['shorts', 'pants', 'chinos', 'jeans', 'skirt'];
