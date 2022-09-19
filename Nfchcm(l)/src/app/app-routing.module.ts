import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaveComponent } from './components/leave/leave.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {path: '', component:LoginComponent},
  {path:'leave' ,component:LeaveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
