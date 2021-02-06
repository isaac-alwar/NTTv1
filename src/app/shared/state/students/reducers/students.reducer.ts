import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Student } from '../../students/models/students.model';
import * as StudentsActions from '../../students/actions/students.actions';

export const studentsFeatureKey = 'students';

export interface State extends EntityState<Student> {
  error: any;
  selectedStudentId: string | null;
}

export const adapter: EntityAdapter<Student> = createEntityAdapter<Student>();

export const initialState: State = adapter.getInitialState({
  selectedStudentId: null,
  error: null
});


export const studentsReducer = createReducer(
  initialState,
  on(StudentsActions.loadStudentsSuccess, (state, {students}) =>{
    return adapter.addMany(students, {...state, selectedStudentId: null});
  }),
  // on(StudentsActions.loadStudentsSuccess,
  //   (state, action) => adapter.setAll(action.students, state)
  // ),
  on(StudentsActions.addStudent,
    (state, action) => adapter.addOne(action.student, state)
  ),
  on(StudentsActions.upsertStudent,
    (state, action) => adapter.upsertOne(action.student, state)
  ),
  on(StudentsActions.addStudents,
    (state, action) => adapter.addMany(action.students, state)
  ),
  on(StudentsActions.upsertStudents,
    (state, action) => adapter.upsertMany(action.students, state)
  ),
  on(StudentsActions.updateStudent,
    (state, action) => adapter.updateOne(action.student, state)
  ),
  on(StudentsActions.updateStudents,
    (state, action) => adapter.updateMany(action.students, state)
  ),
  on(StudentsActions.deleteStudent,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(StudentsActions.deleteStudents,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(StudentsActions.clearStudents,
    state => adapter.removeAll(state)
  ),
);


export function reducer(state: State | undefined, action: Action) {
  return studentsReducer(state, action);
}

export const getSelectedStudentId = (state: State) => state.selectedStudentId;

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

export const selectStudentIds = selectIds;

export const selectAllStudents = selectAll;

export const selectStudentTotal = selectTotal;
