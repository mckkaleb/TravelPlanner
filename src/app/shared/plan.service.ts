import { Injectable } from '@angular/core';
import { Block } from '../block';

/**
 * Service for managing a plan, including its blocks, title, and budget.
 */
@Injectable({
  providedIn: 'root'
})
export class PlanService {
  private blocks: Block[] = []
  private title: string = ''
  private budget: number = 0

  /**
 * Adds a new block to the plan.
 * @param block The block to add to the plan.
 */
  addBlock(block: Block) {
    this.blocks.push(block)
  }

  /**
   * Sets the title of the plan.
   * @param title The new title for the plan.
   */
  setTitle(title: string) {
    this.title = title
  }

  /**
   * Sets the budget for the plan.
   * @param budget The new budget for the plan.
   */
  setBudget(budget: number) {
    this.budget = budget
  }

  /**
   * Gets the list of blocks in the plan.
   * @returns The list of blocks in the plan.
   */
  getBlocks() {
    return this.blocks
  }

  /**
   * Gets the title of the plan.
   * @returns The title of the plan.
   */
  getTitle() {
    return this.title
  }

  /**
   * Gets the budget of the plan.
   * @returns The budget of the plan.
   */
  getBudget() {
    return this.budget
  }
}
