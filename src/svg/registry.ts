import type { FC } from 'react';
import type { GarmentType } from '../db/types';
import { Tshirt }     from './Tshirt';
import { HalfShirt }  from './HalfShirt';
import { Shirt }      from './Shirt';
import { Polo }       from './Polo';
import { Sweatshirt } from './Sweatshirt';
import { Hoodie }     from './Hoodie';
import { Sweater }    from './Sweater';
import { Jacket }     from './Jacket';
import { Blazer }     from './Blazer';
import { Coat }       from './Coat';
import { Shorts }     from './Shorts';
import { Pants }      from './Pants';
import { Chinos }     from './Chinos';
import { Jeans }      from './Jeans';
import { Skirt }      from './Skirt';

export const GARMENT_SVG: Record<GarmentType, FC<{ color: string }>> = {
  tshirt: Tshirt, halfshirt: HalfShirt, shirt: Shirt, polo: Polo,
  sweatshirt: Sweatshirt, hoodie: Hoodie, sweater: Sweater,
  jacket: Jacket, blazer: Blazer, coat: Coat,
  shorts: Shorts, pants: Pants, chinos: Chinos, jeans: Jeans, skirt: Skirt,
};
