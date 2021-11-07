import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SurveyComponent } from '../app/survey/survey.component';
import { SurveysComponent } from '../app/survey/surveys/surveys.component';
import { ErrorComponent } from './error/error.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'survey', component: SurveyComponent },
  { path: 'surveys', component: SurveysComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
