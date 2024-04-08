import { Component } from '@angular/core';
import { Block } from '../../block';

@Component({
  selector: 'app-plan-editor',
  templateUrl: './plan-editor.component.html',
  styleUrl: './plan-editor.component.css'
})
export class PlanEditorComponent {
  blocks: Block[] = []

  modalOpen: boolean = false

  addBlock(newBlock: Block) {
    this.blocks.push(newBlock)
  }

  toggleModal() {
    this.modalOpen = !this.modalOpen
  }  
}
