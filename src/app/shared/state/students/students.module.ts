import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fromStudents from '../students/reducers/students.reducer';

import { EffectsModule } from '@ngrx/effects';
import { StudentsEffects } from './effects/students.effects';
import { StudentsPageComponent } from './components/students-page/students-page.component';
import { StoreModule } from '@ngrx/store';



@NgModule({
  declarations: [StudentsPageComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromStudents.studentsFeatureKey, fromStudents.studentsReducer),
    EffectsModule.forFeature([StudentsEffects])
  ]
})
export class StudentsModule { }
