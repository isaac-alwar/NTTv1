import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { Student } from '../models/students.model';

export const loadStudents = createAction(
  '[Students Page] Load Students'
  // props<{ students: Student[]}>()
);

export const loadStudentsSuccess = createAction(
  '[Students/API] Load Students Success',
  props<{ students: Student[]}>()
);

export const loadStudentsFailure = createAction(
  '[Students/EFFECTS] Load Students Failure',
  props<{ error: any }>()
);


/* ************************************ */


export const addStudent = createAction(
  '[Students/API] Add Student',
  props<{ student: Student }>()
);

export const addStudentFailure = createAction(
  '[Students/API] Add Student Failure',
  props<{error: any}>()
);

export const upsertStudent = createAction(
  '[Students/API] Upsert Students',
  props<{ student: Student }>()
);

export const addStudents = createAction(
  '[Students/API] Add Students',
  props<{ students: Student[] }>()
);

export const upsertStudents = createAction(
  '[Students/API] Upsert Students',
  props<{ students: Student[] }>()
);

export const updateStudent = createAction(
  '[Students/API] Update Students',
  props<{ student: Update<Student> }>()
);

export const updateStudents = createAction(
  '[Students/API] Update Students',
  props<{ students: Update<Student>[] }>()
);

export const deleteStudent = createAction(
  '[Students/API] Delete Student',
  props<{ id: string }>()
);

export const deleteStudents = createAction(
  '[Students/API] Delete Students',
  props<{ ids: string[] }>()
);

export const clearStudents = createAction(
  '[Students/API] Clear Students'
);
