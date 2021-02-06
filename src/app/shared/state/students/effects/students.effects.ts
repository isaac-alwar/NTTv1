import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, mergeMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as StudentsActions from '../actions/students.actions';
import { StudentsService } from 'src/app/shared/services/students.service';



@Injectable()
export class StudentsEffects {

  loadStudents$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(StudentsActions.loadStudents, StudentsActions.loadStudentsSuccess),
        mergeMap(() =>
          this.studentsService.getAllStudents()
             .pipe(
                map(students => StudentsActions.loadStudentsSuccess({ students: students })),
              catchError(error => of(StudentsActions.loadStudentsFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions, private studentsService: StudentsService) {}

}
