import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromStudents from '../reducers/students.reducer';

export const selectStudentsState = createFeatureSelector<fromStudents.State>(
  fromStudents.studentsFeatureKey
);

export const xt_selectStudentIds = createSelector(
  selectStudentsState,
  fromStudents.selectIds
);

export const xt_selectStudentEntities = createSelector(
  selectStudentsState,
  fromStudents.selectEntities
);

export const xt_selectAllStudents = createSelector(
  selectStudentsState,
  fromStudents.selectAll
);

export const xt_selectStudentTotal = createSelector(
  selectStudentsState,
  fromStudents.selectTotal
);

export const xt_currentActiveStudentId = createSelector(
  selectStudentsState,
  fromStudents.getSelectedStudentId
);

// export const selectCurrentStudent = createSelector(
//   fromStudents.selectEntities,
//   fromStudents.getSelectedStudentId, // selectCurrentStudentId,
//   (studentEntities, studentId) => studentEntities[studentId]
// );
