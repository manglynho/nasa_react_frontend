
import { ImageEntry } from '../types/image_type';
export const imgsToShow = ( photoPool: ImageEntry[] ) => {
    const shuffled = [...photoPool].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 6);
} 