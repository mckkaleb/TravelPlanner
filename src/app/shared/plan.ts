import { Block } from "../block"

export interface Plan {
  title: string 
  budget: number 
  blocks: Block[]
}

/**
 * Checks if the provided object is a valid `Plan` object.
 *
 * @param obj - The object to check.
 * @returns `true` if the object is a valid `Plan`, `false` otherwise.
 */
export function isPlan(obj: any): obj is Plan {
  return obj && obj.title && obj.budget && Array.isArray(obj.blocks);
}