import { AuthGuard } from './feature/dashboard/auth/auth.guard';
import { LoginComponent } from './feature/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotfoundComponent } from './core/page-notfound/page-notfound.component';
import { EmployeePasswordGenerationComponent } from './feature/employee-password-generation/employee-password-generation.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {path:'password-generation',component:EmployeePasswordGenerationComponent},
  {path: 'home', loadChildren: './feature/dashboard/dashboard.module#DashboardModule',canActivate:[AuthGuard] },
  {path: '**', component: PageNotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports : [RouterModule]
})
export class AppRoutingModule { }
