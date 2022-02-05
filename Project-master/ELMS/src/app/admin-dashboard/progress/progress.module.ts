import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'

import { ProgressRoutingModule } from './progress-routing.module';
import { DashComponent } from './dash/dash.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view/view.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';




@NgModule({
  declarations: [
    DashComponent,
    EditComponent,
    AddComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    ProgressRoutingModule,
    FormsModule,
    NgCircleProgressModule.forRoot({
      "radius": 80,
      "space": -10,
      "outerStrokeGradient": true,
      "outerStrokeWidth": 10,
      "outerStrokeColor": "#4882c2",
      "outerStrokeGradientStopColor": "#53a9ff",
      "innerStrokeColor": "#e7e8ea",
      "innerStrokeWidth": 10,
      "responsive":false,
      "animateTitle": false,
      "animationDuration": 1000,
      "showUnits": true,
      "showBackground": false,
      "clockwise": false,
      "startFromZero": false,
      "lazy": true}),
    ProgressRoutingModule,
    NgCircleProgressModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
    
  
  ]
})
export class ProgressModule { }
