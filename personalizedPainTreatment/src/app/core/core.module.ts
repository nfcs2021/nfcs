import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavnsideWrapperComponent } from './navigation-contents/navnside-wrapper/navnside-wrapper.component';
import { TopNavigationComponent } from './navigation-contents/top-navigation/top-navigation.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { MaterialModule } from '../shared/material/material.module';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './navigation-contents/sidebar/sidebar.component';



@NgModule({
  declarations: [
    NavnsideWrapperComponent,
    TopNavigationComponent,
    PageNotfoundComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule

  ],
  exports: [
    NavnsideWrapperComponent
  ]
})
export class CoreModule { }
