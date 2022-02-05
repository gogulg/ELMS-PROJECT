import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCourseComponent } from './add-course/add-course.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { ViewCourseComponent } from './view-course/view-course.component';

const routes: Routes = [
  { path: '', component: ViewCourseComponent  },
  { path: 'courseView', component: ViewCourseComponent },
  { path: 'courseAdd', component: AddCourseComponent },
  { path: 'courseEdit/:id', component: EditCourseComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}
