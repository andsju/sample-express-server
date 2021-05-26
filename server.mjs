import express from 'express';

// use express framework
const app = express();
const port = 3100;

// template engine
import ejs from 'ejs';
app.set('view engine', 'ejs');

// serve static files in folder
app.use(express.static('public'));

// routes example
app.get('/hello', (req, res) => {
    res.status(200).end('Hello World');
})

// use template
app.get('/', (req, res) => {
    res.render('index', {date: new Date()});
})

// listen to requests
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})