import { values } from 'lodash';

export const selectAllBooks = ({ books }) => {
  return values(books);
};

export const selectBook = ({ books }, id) => {
  debugger
   var book = books[id] || {};
   return book;
};
