import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-start-from-upload',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './start-from-upload.component.html',
  styleUrl: './start-from-upload.component.css'
})
export class StartFromUploadComponent {

}
