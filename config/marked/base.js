import { escapeHTML } from '../util.js';
import { marked } from 'marked';

export const markedRenderer = {
	code({ text, lang, raw }) {
		text = text.replaceAll('\t', '    ');
		if (lang) return `<pre><code class="language-${lang}">${escapeHTML(text)}</code></pre>`;
		return `<pre><code>${escapeHTML(text)}</code></pre>`;
	},
	codespan({ text }) {
		return `<code>${escapeHTML(text)}</code>`;
	},
};

export const footnote = {
	name: 'footnote',
	level: 'block',
	start(src) {
		return src.match(/^\^: /)?.index; 
	},
	tokenizer(src) {
		const rule = /^\^: ([^\n]+)/;
		const match = rule.exec(src);

		if (match) {
			return {
				type: 'footnote',
				raw: match[0],
				text: match[1].trim()
			};
		}
	},
	renderer(token) {
		const content = marked.parseInline(token.text);
		return `<p class="footnote">${content}</p>\n`;
	}
};