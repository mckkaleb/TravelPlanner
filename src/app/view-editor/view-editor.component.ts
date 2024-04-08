import { Component } from '@angular/core';
import { PlannerModule } from '../planner/planner.module';

@Component({
  selector: 'app-view-editor',
  standalone: true,
  imports: [PlannerModule],
  templateUrl: './view-editor.component.html',
  styleUrl: './view-editor.component.css'
})
export class ViewEditorComponent {

}
