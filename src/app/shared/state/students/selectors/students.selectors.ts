import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromStudents from '../reducers/students.reducer';

export const selectStudentsState = createFeatureSelector<fromStudents.State>(
  fromStudents.studentsFeatureKey
);
