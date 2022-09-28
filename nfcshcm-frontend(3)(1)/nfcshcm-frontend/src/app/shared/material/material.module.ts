import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatCheckboxModule, MatInputModule, MatFormFieldModule, MatIconModule,
  MatMenuModule, MatToolbarModule, MatTabsModule, MatCardModule, MatTableModule, MatSlideToggleModule,
  MatRadioModule, MatExpansionModule, MatProgressBarModule, MatListModule, MatButtonToggleModule,
  MatProgressSpinnerModule, 
  MatDialogModule,
  MatSelectModule,
  MatOptionModule,
  MatDatepickerModule,
  MatNativeDateModule,
  } from '@angular/material';

const modules = [
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatToolbarModule,
  MatMenuModule,
  MatTabsModule,
  MatTableModule,
  MatCardModule,
  MatSlideToggleModule,
  MatRadioModule,
  MatExpansionModule,
  MatProgressBarModule,
  MatListModule,
  MatButtonToggleModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatSelectModule,
<<<<<<< HEAD
  MatOptionModule, MatDatepickerModule,
  MatNativeDateModule,
=======
  MatOptionModule,
  MatDatepickerModule,
  MatNativeDateModule
>>>>>>> 766669da8a599ef7ff250598bfb1c3680c6059f2
];

@NgModule({
  imports: [
    CommonModule,
    ...modules
  ],
  exports: [...modules],
  declarations: []
})
export class MaterialModule { }
