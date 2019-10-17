import LessonPlanTypes from './lessonPlan.types';

export const buildLesson = (field, value) => ({
  type: LessonPlanTypes.BUILD_LESSON,
  payload: { field, value }
})