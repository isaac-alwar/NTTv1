import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  // MetaReducer
} from '@ngrx/store';
import * as fromStudents from './students/reducers/students.reducer'
// import { environment } from '../../../environments/environment';
// import { currentStudentId } from './students/selectors/students.selectors';


export interface State {
  students: fromStudents.State;

}

export const reducers: ActionReducerMap<State> = {
  students: fromStudents.studentsReducer

};

// export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];


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

export const selectCurrentStudentId = createSelector(
  selectStudentsState,
  fromStudents.getSelectedStudentId
);

export const selectCurrentStudent = createSelector(
  fromStudents.selectEntities,
  fromStudents.getSelectedStudentId, // selectCurrentStudentId,
  (studentEntities, studentId) => studentEntities[studentId]
);
