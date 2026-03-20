import { Marked, marked } from 'marked';
import { markedRenderer, footnote } from './base.js';

const statementBlockquote = {
  name: 'statementBlockquote',
  level: 'block',
  start(src) {
    return src.match(/^> \[!/)?.index;
  },
  tokenizer(src) {
    const rule = /^> \[!(\w+)\]\s*([\s\S]*?)(?=\n(?![ ]*>)|$)/;
    const match = rule.exec(src);

    if (match) {
      return {
        type: 'statementBlockquote',
        raw: match[0],
        statement: match[1].toLowerCase(),
        text: match[2]
      };
    }
  },
  renderer(token) {
    const content = token.text
      .replace(/^>[ ]?/gm, '');

    const html = marked
			.parse(content)
			.replace('<p>', `<p data-statement="${token.statement}">`);

    return `<blockquote>${html}</blockquote>`;
  }
};

export function markedMaterials() {
	const instance = new Marked();

	instance.use({
		renderer: markedRenderer,
		extensions: [
			statementBlockquote,
			footnote
		]
	});

	return instance;
}