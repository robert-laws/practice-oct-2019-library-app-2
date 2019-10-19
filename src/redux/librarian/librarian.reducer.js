import { ADD_LIBRARIAN, DELETE_LIBRARIAN, EDIT_LIBRARIAN } from './librarian.types';
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
    case EDIT_LIBRARIAN:
      state = {
        list: state.list.map(item => {
          if(item.id === action.payload.id) {
            return {
              ...item,
              fullName: action.payload.fullName
            }
          } else return item
        })
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