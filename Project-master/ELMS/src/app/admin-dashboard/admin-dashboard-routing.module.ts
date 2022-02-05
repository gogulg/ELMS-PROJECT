import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    children: [
      { path: 'home', component: HomepageComponent },
      {
        path: 'planner',
        loadChildren: () =>
          import('./planner/planner.module').then(
            (m) => m.PlannerModule
          ),
      },
      {
        path: 'schedule',
        loadChildren: () =>
          import('./schedule/schedule.module').then((m) => m.ScheduleModule),
      },
      {
        path: 'progress',
        loadChildren: () =>
          import('./progress/progress.module').then((m) => m.ProgressModule),
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },

      {
        path: 'courses',
        loadChildren: () =>
          import('./courses/courses.module').then(
            (m) => m.CoursesModule
          ),
      },

      { path: '**', redirectTo: '/admindashboard/sliders', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminDashboardRoutingModule {}
