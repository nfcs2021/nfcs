import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { FeatureModule } from './feature/feature.module';
import { Ng2TelInputModule } from 'ng2-tel-input';
import {HttpClientModule} from "@angular/common/http";
import { FrontdeskpipePipe } from './frontdeskpipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FrontdeskpipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
    FeatureModule,
    Ng2TelInputModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
