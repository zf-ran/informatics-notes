import { Marked, marked } from 'marked';
import { markedRenderer, footnote } from './base.mjs';

const question = {
	name: 'question',
	level: 'block',
	start(src) { 
		return src.match(/^\?\?/)?.index; 
	},
	tokenizer(src) {
		const rule = /^\?\?(tof)? ([^\n]+)/;
		const match = rule.exec(src);

		if (match) {
			return {
				type: 'question',
				raw: match[0],
				isTof: !!match[1],
				text: match[2].trim()
			};
		}
	},
	renderer(token) {
		const content = marked.parseInline(token.text);
		const className = token.isTof ? 'question tof' : 'question';

		return `<p class="${className}">${content}</p>\n`;
	}
};

const questionSection = {
	name: 'questionSection',
	level: 'block',
	start(src) {
		return src.match(/^> \[!question\]/)?.index;
	},
	tokenizer(src) {
		const rule = /^> \[!question\]\n((?:>.*\n?)*)/;
		const match = rule.exec(src);
		if (!match)
			return;

		return {
			type: 'questionSection',
			raw: match[0],
			body: match[1].replace(/^>[ ]?/gm, '').trim()
		};
	},
	renderer(token) {
		let htmlContent = '';
		const lines = token.body.split('\n');

		const answerMatch = token.body.match(/!!\s*(.*)$/m);
		const isComplex = token.body.includes('- [ ]') || token.body.includes('- [x]');
		const isStandard = token.body.includes('- ( )') || token.body.includes('- (x)');

		if (answerMatch) {
			const questionPart = token.body.replace(/!!.*$/, '');
			htmlContent = marked.parse(questionPart);
			htmlContent += `<p class="answer">${marked.parseInline(answerMatch[1])}</p>`;
		} else if (isComplex || isStandard) {
			const listItems = [];
			const nonListPart = [];

			lines.forEach(line => {
				if (line.trim().match(/^- \([x ]\)/)
					|| line.trim().match(/^- \[[x ]\]/))
					listItems.push(line.trim().substring(2));
				else if (line.trim() !== '')
					nonListPart.push(line);
			});

			htmlContent = marked.parse(nonListPart.join('\n\n'));

			const listClass = isComplex ? 'cmcq' : 'mcq';
			let listHtml = `<ul class="${listClass}">`;

			listItems.forEach(item => {
				const isAnswer = item.startsWith('(x)') || item.startsWith('[x]');
				const text = item.replace(/^[\(\[][x ]?[\)\]]\s*/, '');

				const activeClass = isAnswer ? ' class="answer"' : '';
				listHtml += `<li${activeClass}>${marked.parseInline(text)}</li>`;
			});

			listHtml += `</ul>`;
			htmlContent += listHtml;
		} else {
			htmlContent = marked.parse(token.body);
		}

		htmlContent = htmlContent
			.replace(/<p>\?\?tof\s+/, '<p class="question tof">')
			.replace(/<p>\?\?\s+/, '<p class="question">');

		return `<section class="question-wrapper">\n${htmlContent}\n</section>\n`;
	}
};

export function markedProblemsets() {
	const instance = new Marked();

	instance.use({
		renderer: markedRenderer,
		extensions: [
			question,
			questionSection,
			footnote
		]
	});

	return instance;
}