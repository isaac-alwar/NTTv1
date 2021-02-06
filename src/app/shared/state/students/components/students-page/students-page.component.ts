import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../reducers/students.reducer';
import * as fromStudentActions from '../../actions/students.actions'
import { Observable } from 'rxjs';
import { Student } from '../../models/students.model';
import { selectAll, studentsFeatureKey } from '../../reducers/students.reducer';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.scss']
})
export class StudentsPageComponent implements OnInit {

  students$: Observable<Student[]>;

  constructor(private store: Store<fromStore.State>) {
    this.students$ = store.select(selectAll);
   }

  ngOnInit() {

    this.getAll();
    // this.loadStudents()
  }

  getAll() {
   return this.store.dispatch(fromStudentActions.loadStudents())
  }
}
