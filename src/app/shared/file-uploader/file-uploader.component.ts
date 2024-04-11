import { Component } from '@angular/core';
import { FileService } from '../file.service';

@Component({
  selector: 'app-file-uploader',
  standalone: true,
  template: `
    <input type="file" accept="application/json"
    (change)="fileChanged($event)"
    class="file-input file-input-bordered w-full max-w-xs">
    <button class="btn btn-primary mt-2 btn-block" (click)="uploadFile()">Upload</button>
  `,
  styles: ``
})
export class FileUploaderComponent {
  private fileService: FileService;

  file: any;
  
  constructor(fileService: FileService) {
    this.fileService = fileService;
  }

  /**
 * Handles the change event when a file is selected in the file input.
 * Stores the selected file in the `file` property.
 *
 * @param event - The change event object containing the selected file.
 */
  fileChanged(event: any) {
    this.file = event.target.files[0];
  }

  /**
 * Uploads the selected file to the file service.
 * 
 * This method reads the contents of the selected file using a `FileReader`, parses the contents as JSON, and then sets the parsed file data in the `FileService`.
 */
  uploadFile() {
    const fileReader = new FileReader();
    fileReader.onload = e => {
      const file = fileReader.result ? JSON.parse(fileReader.result.toString()) : null;
      if (file && this.fileService.validateFile(file)) {
        this.fileService.setFile(file);
        this.fileService.proceedToEditor();
      } else {
        alert("Invalid file provided");
      }
    }
    fileReader.readAsText(this.file);
  }
}
