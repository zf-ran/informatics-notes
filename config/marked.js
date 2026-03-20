import { markedMaterials } from './marked/materials.js';
import { markedProblemsets } from './marked/problemsets.js';
import { markedSlides } from './marked/slides.js';

export const marked = {
  materials: markedMaterials(),
  problemsets: markedProblemsets(),
  slides: markedSlides()
};