import { ADD_LIBRARIAN, DELETE_LIBRARIAN } from './librarian.types';
import librariansList from '../../data/librariansList';

const INITIAL_STATE = {
  list: librariansList
}

const librarianReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ADD_LIBRARIAN:
      state = {
        list: [...state.list, action.payload]
      }
      return state;
    case DELETE_LIBRARIAN:
      state = {
        list: state.list.filter(librarian => librarian.id !== action.payload)
      }
      return state;
    default:
      return state;
  }
}

export default librarianReducer;