import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PlannerRoutingModule } from './planner-routing.module';
import { DashComponent } from './dash/dash.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    DashComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    PlannerRoutingModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ]
})
export class PlannerModule { }
