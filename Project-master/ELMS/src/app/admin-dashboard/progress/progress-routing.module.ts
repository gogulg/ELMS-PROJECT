import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { DashComponent } from './dash/dash.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view/view.component';

const routes: Routes = [
  {path:"", component:DashComponent},
  {path:"dash", component:DashComponent},
  {path:"edit/:id", component:EditComponent},
  {path:"add", component:AddComponent},
  {path:"view/:id" , component:ViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgressRoutingModule { }
