import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ReportComponent } from './report/report.component';
import { EarningsComponent } from './earnings/earnings.component';

const routes: Routes = [

{path:'main', component: MainComponent},
{path:'report', component: ReportComponent},
{path:'table', component: EarningsComponent},
{ path: '', redirectTo: '/', pathMatch: 'full' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
