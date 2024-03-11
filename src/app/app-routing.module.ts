
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OfflineSupportComponent } from './offline-support/offline-support.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
 {path:'', component:LoginPageComponent},
 {path: 'dashboard',component: DashboardComponent},
 {path:'offline-support', component: OfflineSupportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
