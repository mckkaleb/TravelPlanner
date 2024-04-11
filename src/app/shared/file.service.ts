import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Plan, isPlan } from './plan';
import { isBlock } from '../block';

/**
 * Provides a service for managing a file represented as JSON data.
 * 
 * The `FileService` allows setting and retrieving a file represented as a JSON object.
 */
@Injectable({
  providedIn: 'root'
})
export class FileService {
  private _file: Plan = JSON.parse('{}');
  private router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  /**
 * Sets the file represented as a JSON object.
 *
 * @param file - The JSON object representing the file.
 */
  setFile(file: Plan) {
    this._file = file;
  }

  /**
 * Validates the provided file to ensure it is a valid Plan object.
 *
 * @param file - The JSON object to be validated.
 * @returns `true` if the file is a valid Plan, `false` otherwise.
 */
  validateFile(file: JSON) {
    if (isPlan(file)) {
      let validBlocks: boolean = true
      file.blocks.forEach(element => {
        if (!isBlock(element)) {
          validBlocks = false
        }
      })
      return validBlocks
    }
    return false
  }

  /**
 * Retrieves the file represented as a JSON object.
 *
 * @returns The JSON object representing the file, or `null` if the file has no blocks.
 */
  getFile() {
    if (this._file.blocks) {
      return this._file;
    } else {
      return null;
    }
  }

  /**
 * Saves the provided Plan object as a JSON file.
 *
 * This method creates a new Blob object with the JSON representation of the
 * provided Plan object, creates a temporary URL for the Blob, and then
 * programmatically clicks on a dynamically created anchor element to trigger
 * the browser's file download functionality.
 *
 * @param plan - The Plan object to be saved as a JSON file.
 */
  saveFile(plan: Plan) {
    const newBlob = new Blob([JSON.stringify(plan)], { type: 'application/json' })
    const link = window.URL.createObjectURL(newBlob)
    const a = document.createElement('a')
    a.href = link
    a.download = 'plan.json'
    a.click()
    document.removeChild(a)
  }

  /**
 * Navigates to the editor route.
 */
  proceedToEditor() {
    this.router.navigate(['/editor']);
  }
}
