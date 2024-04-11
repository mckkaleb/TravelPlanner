/**
 * Represents a block with a title, type, cost, and description.
 */
export class Block {
    title: string;
    type: string;
    cost: number;
    description: string;

    /**
     * Creates a new instance of the Block class.
     * @param title The title of the block.
     * @param type The type of the block.
     * @param cost The cost of the block.
     * @param description The description of the block.
     */
    constructor(title: string, type: string, cost: number, description: string) {
        this.title = title;
        this.type = type;
        this.cost = cost;
        this.description = description;
    }
}

/**
 * Checks if the given object is an instance of the `Block` class.
 * @param obj The object to check.
 * @returns `true` if the object is an instance of `Block`, `false` otherwise.
 */
export function isBlock(obj: any): obj is Block {
    return obj && obj.title && obj.type && typeof obj.cost === 'number' && obj.description;
}