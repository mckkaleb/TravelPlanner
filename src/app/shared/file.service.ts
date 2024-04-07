import { Injectable } from '@angular/core';

/**
 * Provides a service for managing a file represented as JSON data.
 * 
 * The `FileService` allows setting and retrieving a file represented as a JSON object.
 */
@Injectable({
  providedIn: 'root'
})
export class FileService {
  private _file: JSON = JSON.parse('{}');

  /**
 * Sets the file represented as a JSON object.
 *
 * @param file - The JSON object representing the file.
 */
  setFile(file: JSON) {
    this._file = file;
  }

  /**
 * Retrieves the file represented as a JSON object.
 *
 * @returns The JSON object representing the file.
 */
  getFile() {
    return this._file;
  }
}
