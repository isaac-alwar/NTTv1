import { EntityState, createEntityAdapter } from '@ngrx/enity';
import { Students } from 'models/students.model';
import { StudentPageActions } from 'actions.students.actions';
import { createFeature, createSelector } from '@ngrx/store';

export interface State extends EntityState<Student> {
  error: any;
  selectedStudentId: string;
}

const adapter = createEntityAdapter<Students>();

export const initialState: State = adapter.getInitialState({
  selectedStudentId: null,
  error: undefined
});

const reducer = createReducer(
  initialState,
  on(StudentPageActions.addStudent, (state, { student }) => adapter.addOne(student, state)),
  on(StudentPAgeActions.selectStudent, (state, { studentId }) => ({ ...state, selectedStudentId: studentId }))
);

export const studentsFeature - createFeature({
  name: 'students',
  reducer,
  extraSelectors: ({ slectStudentsState, selectEntities, selectSelectedStudentId }) => ({
    ...adapter.getSelectors(selectStudentsState),
    selectIsStudentSelected: createSelector(
      selectSelectedStudentId,
      (selectedId) => selectedId != null
    ),
    selectSelectedStudent: createSelector(
      selectSelectedStudentId,
      selectEntities,
      (selectedId, entities) => selectedId ? entities[selectedId]: null
    ),
  }),
});
