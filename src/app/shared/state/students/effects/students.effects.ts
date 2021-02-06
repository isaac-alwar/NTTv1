import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as StudentsActions from '../actions/students.actions';



@Injectable()
export class StudentsEffects {

  loadStudentss$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(StudentsActions.loadStudents),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => StudentsActions.loadStudentsSuccess({ data })),
          catchError(error => of(StudentsActions.loadStudentsFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
