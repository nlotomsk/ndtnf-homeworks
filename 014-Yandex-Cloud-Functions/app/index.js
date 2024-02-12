const express = require('express');
const serverless = require('serverless-http');

const stor = {
    books:[{
            id: 1,
            name: "Shrek",
            description: "Big and green...",
            modified: "2022-07-21",
            thumbnail: "http://...",
            comics: [
                {
                    id: 1,
                    name: "Spider-Man: 101 Ways to End the Clone Saga (1995) #1"
                }]
        },
        {
            id: 2,
            name: "Fiona",
            description: "green...",
            modified: "2023-09-25",
            thumbnail: "http://...",
            comics: [
                {
                    id: 1,
                    name: "Spider-Man: 101 Ways to End the Clone Saga (1997) #1"
                }]
        }
    ],
}

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/api/characters', (req, res) => {
    const {books} = stor
    res.json(books)
});

app.get('/api/character', (req, res) => {
    const { books } = stor
    const { id } = req.query
    const idx = books.findIndex(el => el.id === +id)
    
    if (idx !== -1) {
        res.json(books[idx])
    } else {
        res.status(404)
        res.json('404 | страница не найдена')
    }
});

module.exports.handler = serverless(app);