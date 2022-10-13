import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotfoundComponent } from './core/page-notfound/page-notfound.component';
import { DashboardHomeComponent } from './feature/dashboard/dashboard-home/dashboard-home.component';
import { MainLayoutComponent } from './feature/dashboard/main-layout/main-layout.component';
const routes: Routes = [
  {path: '', loadChildren: () => import(`./feature/dashboard/dashboard.module`).then(m => m.DashboardModule)},
  {path: '**', component: PageNotfoundComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
