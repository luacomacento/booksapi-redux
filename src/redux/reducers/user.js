const INITIAL_STATE = {
  name: '',
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_USER_NAME':
      return {...state, name: action.payload}
    default:
      return state;
  }
}

export default userReducer;