import { AuthGuard } from './feature/dashboard/auth/auth.guard';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { FeatureModule } from './feature/feature.module';
import 'hammerjs';
<<<<<<< HEAD

=======
>>>>>>> 6d47aa7dc5dbfd05252e1e9899f08e288c890ee2


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
