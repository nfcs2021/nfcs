import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PasswordGenerationComponent } from './components/password-generation/password-generation.component';
import { SampleComponent } from './components/sample/sample.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'password-generation', component: PasswordGenerationComponent },
  { path: 'sample', component: SampleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
