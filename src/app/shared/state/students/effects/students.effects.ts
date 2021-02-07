import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, exhaustMap, flatMap, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as StudentsActions from '../actions/students.actions';
import { StudentsService } from 'src/app/shared/services/students.service';



@Injectable()
export class StudentsEffects {

  constructor(private actions$: Actions, private studentsService: StudentsService) {}

  loadStudents$ = createEffect(() => {

    return this.actions$.pipe(
      ofType(StudentsActions.loadStudents, StudentsActions.loadStudentsSuccess),
        exhaustMap((action) =>
          this.studentsService.getAllStudents()
             .pipe(
                map(students => StudentsActions.loadStudentsSuccess({ students: students })),
              catchError(error => of(StudentsActions.loadStudentsFailure({ error }))))
      )
    );
  });

  addStudent$ = createEffect(() => {

    return this.actions$.pipe(
        ofType(StudentsActions.addStudent),
          concatMap((action) =>
            this.studentsService.addStudent(action.student)
                .pipe(
                  map((student => StudentsActions.addStudent({ student: student })),
                catchError(error => of(StudentsActions.addStudentFailure({ error})))))
        )
    );
  });



}
