import { combineReducers } from "redux";
import booksReducer from "./books";
import userReducer from "./user";

const rootReducer = combineReducers({ user: userReducer, books: booksReducer});

export default rootReducer;