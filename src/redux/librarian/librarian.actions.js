import { ADD_LIBRARIAN } from './librarian.types';

// const addLibrarian = librarian => ({
//     type: ADD_LIBRARIAN,
//     payload: librarian
// })

const addLibrarian = librarian => {
  console.log(librarian)
  return ({
    type: ADD_LIBRARIAN,
    payload: librarian
  })
}

const librarianActions = {
  addLibrarian
}

export default librarianActions;