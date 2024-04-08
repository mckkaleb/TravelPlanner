import { Component, EventEmitter, Output } from '@angular/core';
import { Block } from '../../block';

@Component({
  selector: 'app-add-block',
  templateUrl: './add-block.component.html',
  styleUrl: './add-block.component.css'
})
export class AddBlockComponent {
  blockType: string = ''
  title: string = ''
  cost: number = 0
  description: string = ''

  @Output() blockAddedEvent = new EventEmitter<Block>()

  /**
 * Emits a new `Block` instance with the current values of `blockType`, `title`, `cost`, and `description` when the form is submitted.
 */
  onSubmit() {
    const newBlock = new Block(this.blockType, this.title, this.cost, this.description)

    this.blockAddedEvent.emit(newBlock)
  }
}
