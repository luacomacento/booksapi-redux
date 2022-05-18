export const setUserName = (name) => ({
  type: 'SET_USER_NAME',
  payload: name,
});

export const setBooksList = (books) => ({
  type: 'SET_BOOKS_LIST',
  payload: books,
});

// Idealmente você irá criar uma action para o caso de erros no fetch, além de uma para indicar que a informação está carregando. Isso não foi feito no exemplo em benefício do tempo. Mas imagino que vocês tenham ideia de como podem fazer! :)
export const fetchBooks = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('https://gutendex.com/books/');
      const result = await response.json();
      const {results: books} = result;
      dispatch(setBooksList(books));
    } catch (error) {
      console.log(error);
    }
  }
}

export const setCurrentBook = (book) => ({
  type: 'SET_CURRENT_BOOK',
  payload: book,
})

export const fetchBookData = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://gutendex.com/books/${id}`);
      const result = await response.json();
      dispatch(setCurrentBook(result));
    } catch (error) {
      console.log(error);
    }
  }
}