import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { PricingComponent } from '../../components/pricing/pricing.component';
import { MyServicesComponent } from '../../components/my-services/my-services.component';
import { TechComponent } from '../../components/tech/tech.component';
import { ProjectsComponent } from '../../components/projects/projects.component';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    PricingComponent,
    MyServicesComponent,
    TechComponent,
    ProjectsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  scrollToServices() {
    const el = document.getElementById('services');
    el?.scrollIntoView({ behavior: 'smooth' });
  }
}
