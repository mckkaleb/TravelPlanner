import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBlockComponent } from './add-block/add-block.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { PlanEditorComponent } from './plan-editor/plan-editor.component';
import { TitleEditorComponent } from './title-editor/title-editor.component';
import { BudgetEditorComponent } from './budget-editor/budget-editor.component';



@NgModule({
  declarations: [
    AddBlockComponent,
    PlanEditorComponent,
    TitleEditorComponent,
    BudgetEditorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    PlanEditorComponent
  ]
})
export class PlannerModule { }
