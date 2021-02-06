import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StudentsEffects } from './effects/students.effects';
import { StudentsPageComponent } from './components/students-page/students-page.component';



@NgModule({
  declarations: [StudentsPageComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([StudentsEffects])
  ]
})
export class StudentsModule { }
