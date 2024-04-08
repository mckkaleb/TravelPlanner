import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-budget-editor',
  templateUrl: './budget-editor.component.html',
  styles: ``
})
export class BudgetEditorComponent {
  @Input() budget: number = 0

  @Output() budgetChanged = new EventEmitter<number>()

  /**
 * Emits the current budget value when the budget is changed.
 */
  onSubmit() {
    this.budgetChanged.emit(this.budget)
  }
}
