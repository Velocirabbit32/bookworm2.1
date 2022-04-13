const request = require('supertest');
const server = 'http://localhost:3000';
const booksController = require('../server/controllers/booksController');

const dbResponse =  {
    "readinglistid": 28,
    "username": "carlyy",
    "userid": 1,
    "title": "Hail Mary",
    "author": "Alexander Hamilton",
    "genre_id": 4,
    "genre": "Scifi/Fantasy",
    "status": "present",
    "recommend": null,
    "review": null
};