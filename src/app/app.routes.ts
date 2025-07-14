import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'contact-webapp',
    loadComponent: () =>
      import('./components/contact-webapp/contact-webapp.component').then(
        (m) => m.ContactWebappComponent
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
