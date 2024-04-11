import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBlockComponent } from './add-block/add-block.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { PlanEditorComponent } from './plan-editor/plan-editor.component';
import { TitleEditorComponent } from './title-editor/title-editor.component';
import { BudgetEditorComponent } from './budget-editor/budget-editor.component';
import { BlockComponent } from './block/block.component';
import { StatComponent } from './stat/stat.component';
import { NgxPrintModule } from 'ngx-print';



@NgModule({
  declarations: [
    AddBlockComponent,
    PlanEditorComponent,
    TitleEditorComponent,
    BudgetEditorComponent,
    BlockComponent,
    StatComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    NgxPrintModule
  ],
  exports: [
    PlanEditorComponent
  ]
})
export class PlannerModule { }
