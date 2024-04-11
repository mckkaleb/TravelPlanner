import { Component } from '@angular/core';
import { Block } from '../../block';
import { PlanService } from '../../shared/plan.service';
import { FileService } from '../../shared/file.service';

@Component({
  selector: 'app-plan-editor',
  templateUrl: './plan-editor.component.html',
  styleUrl: './plan-editor.component.css'
})
export class PlanEditorComponent {
  blocks: Block[]
  title: string
  budget: number

  /**
 * Calculates the total cost of all blocks in the plan.
 * @returns The total cost of all blocks, or 0 if there are no blocks.
 */
  get totalCost() {
    if (this.blocks) {
      return this.blocks.reduce((total, current) => {
        return total + current.cost
      }, 0)
    }
    return 0
  }

  /**
 * Determines whether the total cost of all blocks in the plan is within the specified budget.
 * @returns `true` if the total cost is less than or equal to the budget, `false` otherwise.
 */
  get planInBudget() {
    return this.totalCost <= this.budget
  }

  modalOpen: boolean = false
  printing: boolean = false

  planService: PlanService
  fileService: FileService

  constructor(planService: PlanService, fileService: FileService) {
    this.blocks = planService.getBlocks()
    this.title = planService.getTitle()
    this.budget = planService.getBudget()
    this.planService = planService

    this.fileService = fileService
  }

  /**
 * Initializes the plan editor component by loading the plan data from the file service.
 * If a file is available, the title, budget, and blocks are set from the file data.
 * If no file is available, the title, budget, and blocks are initialized to default values.
 */
  ngOnInit() {
    const file = this.fileService.getFile()

    if (file) {
      this.title = file.title
      this.budget = file.budget
      this.blocks = file.blocks
    } else {
      this.blocks = []
      this.title = ''
      this.budget = 0
    }
  }

  /**
 * Adds a new block to the plan.
 * @param newBlock - The new block to add to the plan.
 */
  addBlock(newBlock: Block) {
    this.blocks.push(newBlock)
    this.toggleModal()
  }

  /**
 * Sets the title of the plan.
 * @param newTitle - The new title to set for the plan.
 */
  setTitle(newTitle: string) {
    this.title = newTitle
    this.planService.setTitle(newTitle)
  }

  /**
 * Sets the budget for the plan.
 * @param newBudget - The new budget value to set for the plan.
 */
  setBudget(newBudget: number) {
    this.budget = newBudget
    this.planService.setBudget(newBudget)
  }

  /**
 * Removes a block from the plan.
 * @param block - The block to remove from the plan.
 */
  removeBlock(block: Block) {
    const index = this.blocks.indexOf(block);
    if (index > -1) {
      this.blocks.splice(index, 1);
    }
  }

  /**
 * Toggles the visibility of the add block modal.
 */
  toggleModal() {
    this.modalOpen = !this.modalOpen
  }

  /**
 * Saves the current plan to a file.
 */
  savePlan() {
    this.fileService.saveFile({
      title: this.title,
      budget: this.budget,
      blocks: this.blocks
    })
  }
}
