import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { DashComponent } from './dash/dash.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {path:"", component:DashComponent},
  {path:"dash", component:DashComponent},
  {path:"edit/:id", component:EditComponent},
  {path:"add", component:AddComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlannerRoutingModule { }
