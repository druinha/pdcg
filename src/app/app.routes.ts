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
       path: 'privacy-policy',
       loadComponent: () =>
         import('./pages/privacy-policy/privacy-policy.component').then(
           (m) => m.PrivacyPolicyComponent
         ),
     },
     {
      path: 'about',
      loadComponent: () =>
        import('./pages/about/about.component').then((m) => m.AboutComponent),
    
     },
     {
      path: 'blog',
      loadComponent: () =>
        import('./pages/blog/blog.component').then((m) => m.BlogComponent),
     },
     {
      path: 'sitemap',
      loadComponent: () =>
        import('./pages/sitemap/sitemap.component').then((m) => m.SitemapComponent),
     },
     {
      path: 'terms-contidions',
      loadComponent: () =>
        import('./pages/terms-conditions/terms-conditions.component').then(
          (m) => m.TermsConditionsComponent
        ),
     },

  {
    path: '**',
    redirectTo: '',
  },
];
