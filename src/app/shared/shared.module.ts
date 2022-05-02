import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingBoxComponent } from '../components/shared/loading-box/loading-box.component';

@NgModule({
  declarations: [
    LoadingBoxComponent, 
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoadingBoxComponent
  ]
})
export class SharedModule { }
