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
    path: 'contact-consulting',
    loadComponent: () =>
      import(
        './components/contact-consulting/contact-consulting.component'
      ).then((m) => m.ContactConsultingComponent),
  },
    { path: 'cookies-policy', 
    loadComponent: () =>
      import('./pages/cookies-policy/cookies-policy.component').then(
        (m) => m.CookiesPolicyComponent
      ),
     },

  {
    path: '**',
    redirectTo: '',
  },
];
