import { combineReducers } from 'redux';

import lessonPlanReducer from './lessonPlan/lessonPlan.reducer';
import librarianReducer from './librarian/librarian.reducer';

export default combineReducers({
  lesson: lessonPlanReducer,
  librarians: librarianReducer
})