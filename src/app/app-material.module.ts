import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatToolbarModule,
  MatGridListModule 
} from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatGridListModule
  ],
  exports: [
    MatToolbarModule,
    MatGridListModule
  ]
})
export class AppMaterialModule { }
