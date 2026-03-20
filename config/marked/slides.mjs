import { Marked } from 'marked';
import { markedRenderer, footnote } from './base.mjs';

export function markedSlides() {
	const instance = new Marked();

	instance.use({
		renderer: markedRenderer,
		extensions: [footnote]
	});

	return instance;
}