import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fromStudents from '../students/reducers/students.reducer';

import { EffectsModule } from '@ngrx/effects';
import { StudentsEffects } from './effects/students.effects';
import { StudentsPageComponent } from './components/students-page/students-page.component';
import { StoreModule } from '@ngrx/store';
import { StudentsService } from '../../services/students.service';
import { StudentsRoutingModule } from './students-routing.module';

@NgModule({
  declarations: [StudentsPageComponent],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    StoreModule.forFeature(fromStudents.studentsFeatureKey, fromStudents.studentsReducer),
    EffectsModule.forFeature([StudentsEffects])
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [StudentsService]
})
export class StudentsModule { }
