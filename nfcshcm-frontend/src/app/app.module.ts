import { AuthGuard } from './feature/dashboard/auth/auth.guard';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { FeatureModule } from './feature/feature.module';
<<<<<<< HEAD
import 'hammerjs';
=======
 

import 'hammerjs';



>>>>>>> 5732391d08cd9fc75787a1bc9798773ddf8f8d6a


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    CoreModule,
    FeatureModule,
    SharedModule,
   
    
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
