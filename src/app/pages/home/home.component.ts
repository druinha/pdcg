import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { PricingComponent } from '../../components/pricing/pricing.component';
import { MyServicesComponent } from '../../components/my-services/my-services.component';
import { TechComponent } from '../../components/tech/tech.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { ConsultingComponent } from '../../components/consulting/consulting.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { SolutionsComponent } from '../../components/solutions/solutions.component';
import { EnviromentalComponent } from '../../components/enviromental/enviromental.component';
import { WhyUsComponent } from '../../components/why-us/why-us.component';
import { Title, Meta } from '@angular/platform-browser';
import { CookieBannerComponent } from '../../components/cookie-banner/cookie-banner.component';
import { SubventionsComponent } from '../../components/subventions/subventions.component';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    PricingComponent,
    MyServicesComponent,
    TechComponent,
    ProjectsComponent,
    ConsultingComponent,
    ContactComponent,
    SolutionsComponent,
    EnviromentalComponent,
    WhyUsComponent,
    CookieBannerComponent,
    SubventionsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private titleService: Title, private metaService: Meta) {
    this.titleService.setTitle(
      'PDCG - Proxectos, Desenvolvemento e Código da Galiza'
    );
    this.metaService.addTags([
      {
        name: 'description',
        content:
          'We create web and mobile applications for businesses in Galicia. Tailored digital solutions for your company.',
      },
      {
        name: 'keywords',
        content:
          'Web development, App development, Galicia, PDCG, software, mobile, Angular, Ionic',
      },
      {
        property: 'og:title',
        content: 'PDCG Solutions - Digital Development Experts',
      },
      {
        property: 'og:description',
        content:
          'Web and app development agency helping Galician companies grow with tailored software.',
      },
      {
        property: 'og:image',
        content: 'https://pdcgsolutions.com/assets/og-image.jpg',
      },
      { property: 'og:url', content: 'https://pdcgsolutions.com/' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ]);
  }
}
