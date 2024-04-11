import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Block } from '../../block';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styles: `
    @media print {
      .no-print, .no-print * {
        display: none !important;
      }
    }
  `
})
export class BlockComponent {
  @Input() block?: Block = undefined;

  @Output() delete = new EventEmitter<Block>();

  /**
 * Emits an event to delete the current block.
 */
  deleteBlock() {
    this.delete.emit(this.block);
  }
}
