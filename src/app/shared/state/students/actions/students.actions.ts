import { Update } from '@ngrx/entity';
import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';
import { Student } from '../models/students.model';

export const StudentsPageActions = createActionGroup({
  source: 'Students Page'
  events: {
    Enter: emptyProps(),
    'Student Added': props<{ student: Student }>(),  
  },
})
// Usage =>>
// StudentsPAgeActions.enter()
// StudentsPageActions.studentAdded({ student: { id:'001', firstName: 'isaac', lastName: 'alwar'} });

export const StudentsApiActions = createActionGroup({
  source: 'Students API',
  events: {
    'Students Loaded Success': props<{ students: Student[] }>(),
    'Students Loaded Failure': props<{ error: string }>(),
    
    'Students Added Success': props<{ students: Student[] }>(),
    'Students Added Failure': props<{ error: string }>(),
    
    'Student Added Success': props<{ student: Student }>(),
    'Student Added Failure': props<{ error: string }>(),

    'Student Deleted Success': props<{ id: string }>(),
    'Student Deleted Failure': props<{ error: string }>(),
    
    'Students Deleted Success': props<{ id: string[] }>(),
    'Students Deleted Failure': props<{ error: string }>(),
    
  },
})

/* LOAD ACTIONS
/* ************************************ */
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


/*
ADD ACTIONS
/* ************************************ */
export const addStudent = createAction(
  '[Students/API] Add Student',
  props<{ student: Student }>()
);

export const addStudents = createAction(
  '[Students/API] Add Students',
  props<{ students: Student[] }>()
);

export const addStudentFailure = createAction(
  '[Students/API] Add Student Failure',
  props<{error: any}>()
);


/*
UPSERT ACTIONS
/* ************************************ */
export const upsertStudent = createAction(
  '[Students/API] Upsert Students',
  props<{ student: Student }>()
);

export const upsertStudents = createAction(
  '[Students/API] Upsert Students',
  props<{ students: Student[] }>()
);

/*
UPDATE ACTIONS
/* ************************************ */
export const updateStudent = createAction(
  '[Students/API] Update Students',
  props<{ student: Update<Student> }>()
);

export const updateStudents = createAction(
  '[Students/API] Update Students',
  props<{ students: Update<Student>[] }>()
);

/*
DELETE ACTIONS
/* ************************************ */
export const deleteStudent = createAction(
  '[Students/API] Delete Student',
  props<{ id: string }>()
);

export const deleteStudents = createAction(
  '[Students/API] Delete Students',
  props<{ ids: string[] }>()
);


/*
CLEAR ACTION
/* ************************************ */
export const clearStudents = createAction(
  '[Students/API] Clear Students'
);
