import { IBook } from "./models";

export const mockData = { 
  booklist: {
    books: [
      {
        "id": 2086,
        "book_author": [
            "Ανώνυμος"
        ],
        "book_title": "Ο Αλέξανδρος ο Μακεδών",
        "book_publication_year": 1529,
        "book_publication_country": "Ιταλία",
        "book_publication_city": "Βενετία",
        "book_pages": 104
    },
    {
      "id": 2060,
      "book_author": [
          "Ανώνυμος"
      ],
      "book_title": "Διήγησις εις τας πράξεις του περιβοήτου στρατηγού των ρωμαίων μεγάλου Βελισαρίου",
      "book_publication_year": 1548,
      "book_publication_country": "Ιταλία",
      "book_publication_city": "Βενετία",
      "book_pages": 32
    }
    ],
    count: 0,
    params: {
      page: 1,
      itemsPerPage: 20,
      filters: []
    },
    status: 'idle'
  }
}

export const mockBook: IBook = {
  id: 2060,
  book_author: [
      "Ανώνυμος"
  ],
  book_title: "Διήγησις εις τας πράξεις του περιβοήτου στρατηγού των ρωμαίων μεγάλου Βελισαρίου",
  book_publication_year: "1548",
  book_publication_country: "Ιταλία",
  book_publication_city: "Βενετία",
  book_pages: 32
}