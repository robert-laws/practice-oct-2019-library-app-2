import { ADD_LIBRARIAN, DELETE_LIBRARIAN, EDIT_LIBRARIAN } from './librarian.types';

// const addLibrarian = librarian => {
//   console.log(librarian)
//   return ({
//     type: ADD_LIBRARIAN,
//     payload: librarian
//   })
// }

export const addLibrarian = librarian => ({
  type: ADD_LIBRARIAN,
  payload: librarian
})

export const editLibrarian = librarian => ({
  type: EDIT_LIBRARIAN,
  payload: librarian
})

export const deleteLibrarian = id => ({
  type: DELETE_LIBRARIAN,
  payload: id
})