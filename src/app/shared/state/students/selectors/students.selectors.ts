import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromStudents from '../reducers/students.reducer';

export const selectStudentsState = createFeatureSelector<fromStudents.State>(
  fromStudents.studentsFeatureKey
);

export const selectStudentIds = createSelector(
  selectStudentsState,
  fromStudents.selectIds
);

export const selectStudentEntities = createSelector(
  selectStudentsState,
  fromStudents.selectEntities
);

export const selectAllStudents = createSelector(
  selectStudentsState,
  fromStudents.selectAll
);

export const selectStudentTotal = createSelector(
  selectStudentsState,
  fromStudents.selectTotal
);

export const currentActiveStudentId = createSelector(
  selectStudentsState,
  fromStudents.getSelectedStudentId
)
