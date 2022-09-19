import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { PasswordGenerationComponent } from './components/password-generation/password-generation.component';
import { LeaveComponent } from './components/leave/leave.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PasswordGenerationComponent,
    LeaveComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
