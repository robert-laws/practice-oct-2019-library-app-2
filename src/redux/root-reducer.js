import { combineReducers } from 'redux';
import lessonPlanReducer from './lessonPlan/lessonPlan.reducer';

export default combineReducers({
  lesson: lessonPlanReducer
})