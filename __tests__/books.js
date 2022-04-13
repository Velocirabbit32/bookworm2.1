
const request = require('supertest');
const server = 'http://localhost:3000';

jest.mock('../server/controllers/booksController.js');
const booksController = require('../server/controllers/booksController.js');

const mockBookList = {
  name: 'Book'
}
booksController.getBooks.mockResolvedValue(mockBookList);
booksController.addBook.mockResolvedValue(mockBookList);
booksController.updateBookStatus.mockResolvedValue(mockBookList);
booksController.removeBook.mockResolvedValue(mockBookList);

describe('Route integration', () => {
  describe('/', () => {
    describe('GET', () => {
      // Note that we return the evaluation of `request` here! It evaluates to
      // a promise, so Jest knows not to say this test passes until that
      // promise resolves. See https://jestjs.io/docs/en/asynchronous
      it('responds with 200 status and text/html content type', () => request(server)
        .get('/')
        .expect('Content-Type', /text\/html/)
        .expect(200));
    });
  }),
    describe('GET /books/all', () => {
      describe('GET', () => {
        it('responds with 200 status and json content type', () => request(server)
          .get('/books/all')
          .expect('Content-Type', /json/)
          .expect(200)
        ),
        it('calls middleware to get book list', async () => {
          request(server)
            .get('/books/all')
            .then(response => {
              expect(booksController.getBooks).toHaveBeenCalledTimes(1)
              expect(booksController.getBooks).toHaveReturned(mockBookList)
            })
            .catch(err => (err))
          }),

        it('calls middleware for a specific user', async () => {
          request(server)
            .get('/books/1')
            .then(response => {
              expect(booksController.getBooks).toHaveBeenCalledTimes(1)
              expect(booksController.getBooks).toHaveReturned(mockBookList)
            })
            .catch(err => (err))
        })
      })
    }),
    describe('POST /books/id', () => {
      describe('POST', () => {
        it('responds with 200 status and json content type', () => request(server)
          .get('/books/1')
          .expect('Content-Type', /json/)
          .expect(200)
        ),
          it('calls middleware to add a book to the list', async () => {
            request(server)
              .post('/books/1')
              .then(response => {
                expect(booksController.addBook).toHaveBeenCalledTimes(1)
                expect(booksController.addBook).toHaveReturned(mockBookList)
              })
              .catch(err => (err))
          })
      })
    }),
    describe('PATCH /books/id', () => {
      describe('PATCH', () => {
        it('responds with 200 status and json content type', () => request(server)
          .get('/books/1')
          .expect('Content-Type', /json/)
          .expect(200)
        ),
          it('calls middleware to update a book in the list', async () => {
            request(server)
              .post('/books/1')
              .then(response => {
                expect(booksController.updateBookStatus).toHaveBeenCalledTimes(1)
                expect(booksController.updateBookStatus).toHaveReturned(mockBookList)
              })
              .catch(err => (err))
          })
      })
    }),
    describe('DELETE /books/id', () => {
      describe('DELETE', () => {
        it('responds with 200 status and json content type', () => request(server)
          .get('/books/1')
          .expect('Content-Type', /json/)
          .expect(200)
        ),
          it('calls middleware to delete a book from the list', async () => {
            request(server)
              .post('/books/1')
              .then(response => {
                expect(booksController.removeBook).toHaveBeenCalledTimes(1)
                expect(booksController.removeBook).toHaveReturned(mockBookList)
              })
              .catch(err => (err))
          })
      })
    })
})