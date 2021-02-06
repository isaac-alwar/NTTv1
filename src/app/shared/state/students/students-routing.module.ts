import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsPageComponent } from './components/students-page/students-page.component';
// import { StudenteditComponent } from './studentedit/studentedit.component';
// import { StudentsComponent } from './students.component';


const routes: Routes = [
  { path: '', component: StudentsPageComponent }
  // { path: ':id', component: StudenteditComponent }
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forChild(routes)],
  exports: [ RouterModule ]

})
export class StudentsRoutingModule { }
