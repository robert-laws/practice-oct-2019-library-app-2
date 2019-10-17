import LessonPlanTypes from './lessonPlan.types';

const INITIAL_STATE = {
  term: '',
  name: '',
  code: ''
}

const lessonPlanReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case LessonPlanTypes.BUILD_LESSON:
      return {
        ...state, 
        [action.payload.field]: action.payload.value
      }

    default:
      return state;
  }
}

export default lessonPlanReducer;