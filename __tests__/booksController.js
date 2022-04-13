
const subject = require('../server/controllers/booksController');
const db = require('../server/models/bookModels');
jest.mock('../server/models/bookModels');

const dbResponseAll =  [{
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
}, 
{
    "readinglistid": 28,
    "username": "carlyy",
    "userid": 2,
    "title": "Hail Mary",
    "author": "Alexander Hamilton",
    "genre_id": 4,
    "genre": "Scifi/Fantasy",
    "status": "present",
    "recommend": null,
    "review": null
}];

const dbResponse = [{
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
}];

const mockReq = () => {
    const req = {};
    req.params = {
        id: 'all'
    }
    return req;
  };
  const mockReq2 = () => {
    const req = {};
    req.params = {
        id: '1'
    }
    return req;
  };
  const mockRes = () => {
      const res = {};
      res.locals = {};
      res.status = jest.fn().mockReturnValue(res);
      res.json = jest.fn().mockReturnValue(res);
      return res;
  };
const mReq = mockReq();
const mReq2 = mockReq2();
const mRes = mockRes();
const next = jest.fn((req, res) => res);

describe('Books Controller', () => {
    afterAll(() => {
        jest.resetAllMocks();
      });

    describe('get Books', () => {
        it('returns all books when userId is null', async () => {
            await db.query.mockResolvedValue(dbResponseAll);
            await subject.getBooks(mReq, mRes, next)
            expect(mRes.locals).toHaveProperty('booklist');
            expect(db.query).toHaveBeenCalledWith(expect.anything(), []);
        }),
        it('returns only users books when userId is provided', async () => {
            await db.query.mockResolvedValue(dbResponse);
            await subject.getBooks(mReq2, mRes, next)
            expect(mRes.locals).toHaveProperty('booklist');
            expect(db.query).toHaveBeenCalledWith(expect.anything(), ['1']);
            expect(db.query('query', [1])).resolves.toEqual(dbResponse);
        })
    })
});