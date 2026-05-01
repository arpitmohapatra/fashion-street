export type Slot = 'top' | 'outer' | 'bottom';

export type GarmentType =
  | 'tshirt' | 'halfshirt' | 'shirt' | 'polo'
  | 'sweatshirt' | 'hoodie' | 'sweater' | 'jacket' | 'blazer' | 'coat'
  | 'shorts' | 'pants' | 'chinos' | 'jeans' | 'skirt';

export type Occasion = 'casual' | 'work' | 'formal' | 'sport' | 'party' | 'lounge';
export type Weather  = 'cold' | 'mild' | 'warm' | 'hot';
export type Fabric   = 'cotton' | 'wool' | 'denim' | 'linen' | 'synthetic' | 'silk' | 'fleece';

export interface Garment {
  id: string;
  slot: Slot;
  type: GarmentType;
  color: string;         // #RRGGBB
  occasions: Occasion[];
  weather?: Weather[];
  fabric?: Fabric;
  label?: string;
  createdAt: number;
}

export interface Outfit {
  id: string;
  topId?: string;
  outerId?: string;
  bottomId?: string;
  occasion?: Occasion;
  createdAt: number;
}
