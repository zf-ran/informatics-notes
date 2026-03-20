const express = require('express');
const app = express();

const { marked: renderers } = require('./config/marked.mjs');

const matter = require('gray-matter');

const fs = require('fs/promises')
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/materials/:page', async (req, res) => {
	const file = await fs.readFile(`contents/materials/${req.params.page}.md`, 'utf8');
	const { data, content } = matter(file);

	const html = renderers.materials.parse(content);

	res.render('material', {
		chapterNumber: data.chapter,
		title: data.title,
		content: html
	});
});

app.get('/problemsets/:page', async (req, res) => {
	const file = await fs.readFile(`contents/problemsets/${req.params.page}.md`, 'utf8');
	const { data, content } = matter(file);

	const html = renderers.problemsets.parse(content);

	res.render('problemset', {
		meetingNumber: data.meetingNumber,
		questionCount: data.questionCount,
		time: data.time,
		problemsetTitle: data.problemsetTitle,
		date: data.date,
		content: html
	});
});

app.get('/editorials/:page', async (req, res) => {
	const file = await fs.readFile(`contents/editorials/${req.params.page}.md`, 'utf8');
	const { data, content } = matter(file);

	const html = renderers.problemsets.parse(content);

	res.render('editorial', {
		meetingNumber: data.meetingNumber,
		questionCount: data.questionCount,
		time: data.time,
		problemsetTitle: data.problemsetTitle,
		date: data.date,
		solver: data.solver,
		solverClass: data.class,
		content: html
	});
});

const PORT = 8080;

app.listen(PORT, async () => {
	console.log('Server is ready! With port', PORT);
});