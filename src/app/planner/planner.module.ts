import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBlockComponent } from './add-block/add-block.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AddBlockComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    AddBlockComponent
  ]
})
export class PlannerModule { }
