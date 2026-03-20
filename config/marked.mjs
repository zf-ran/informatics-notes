import { markedMaterials } from './marked/materials.mjs';
import { markedProblemsets } from './marked/problemsets.mjs';
import { markedSlides } from './marked/slides.mjs';

export const marked = {
  materials: markedMaterials(),
  problemsets: markedProblemsets(),
  slides: markedSlides()
};