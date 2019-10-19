import { ADD_LIBRARIAN, DELETE_LIBRARIAN } from './librarian.types';

// const addLibrarian = librarian => {
//   console.log(librarian)
//   return ({
//     type: ADD_LIBRARIAN,
//     payload: librarian
//   })
// }

const addLibrarian = librarian => ({
  type: ADD_LIBRARIAN,
  payload: librarian
})

const deleteLibrarian = id => ({
  type: DELETE_LIBRARIAN,
  payload: id
})

const librarianActions = {
  addLibrarian,
  deleteLibrarian
}

export default librarianActions;