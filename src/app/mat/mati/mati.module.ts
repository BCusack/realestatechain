import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';



const matComp = [
  BrowserAnimationsModule,
  MatListModule,
  MatCardModule,
  MatButtonModule,
  MatTableModule,
  MatIconModule,
  MatToolbarModule,
  MatFormFieldModule,

];

@NgModule({
  exports: [
    ...matComp
  ]
})
export class MatiModule { }
