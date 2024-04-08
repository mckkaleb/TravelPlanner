import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StartFromUploadComponent } from './start-from-upload/start-from-upload.component';
import { ViewEditorComponent } from './view-editor/view-editor.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path: 'start-from-upload', component: StartFromUploadComponent},
    { path: 'editor', component: ViewEditorComponent}
];
