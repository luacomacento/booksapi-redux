const INITIAL_STATE = {
  list: [],
  // Aqui foi apenas um exemplo dado no final da aula, de como podemos usar o dado salvo no localStorage para iniciar nossa store, caso esse dado exista.
  currentBook: JSON.parse(localStorage.getItem("currentBook")) || {},
}

const booksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_BOOKS_LIST':
      return {...state, list: action.payload}
    case 'SET_CURRENT_BOOK':
      // Essa não é a melhor forma de se fazer um salvamento no localStorage com redux. O ideal é que seu reducer fique responsável apenas pela atualização de estado.
      // Em breve vocês descobrirão a melhor forma de se fazer isso :)
      localStorage.setItem("currentBook", JSON.stringify(action.payload));
      return {...state, currentBook: action.payload}
    default:
      return state;
  }
}

export default booksReducer;