import { Routes } from '@angular/router';
import { ClientFormComponent } from './client-form/client-form.component';

export const routes: Routes = [
    {path: '', redirectTo: 'client-form', pathMatch: 'full'},
    {path: 'client-form', component: ClientFormComponent}
];
