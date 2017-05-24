import { values } from 'lodash';

export const selectAllBooks = ({ books }) => {
  return values(books);
};

export const selectAllFriends = ({ friends }) => {
  return values(friends);
};

export const selectBook = ({ books }, id) => {
   var book = books[id] || {};
   return book;
};
