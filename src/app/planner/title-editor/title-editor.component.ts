import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-title-editor',
  templateUrl: './title-editor.component.html',
  styleUrl: './title-editor.component.css'
})
export class TitleEditorComponent {
  @Input() title: string = ''

  @Output() titleChanged = new EventEmitter<string>()
  
  /**
 * Emits the current title value when the form is submitted.
 */
  onSubmit() {
    this.titleChanged.emit(this.title)
  }
}
