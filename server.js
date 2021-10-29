// server.js
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const mongoose = require('mongoose');

// const { MongoClient } = require('mongodb');
// // Connection URL
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);
// const dbName = 'myProject';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
	createServer(async (req, res) => {
		const client = await mongoose.connect(
			'mongodb+srv://timcheng:r7865480@cluster0.h2i0d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
		);
		// Be sure to pass `true` as the second argument to `url.parse`.
		// This tells it to parse the query portion of the URL.
		const parsedUrl = parse(req.url, true);
		const { pathname, query } = parsedUrl;

		if (pathname === '/a') {
			app.render(req, res, '/a', query);
		} else if (pathname === '/b') {
			app.render(req, res, '/b', query);
		} else {
			handle(req, res, parsedUrl);
		}
	}).listen(3000, (err) => {
		if (err) throw err;
		console.log('> Ready on http://localhost:3000');
	});
});
