import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { PricingComponent } from '../../components/pricing/pricing.component';
import { MyServicesComponent } from '../../components/my-services/my-services.component';
import { TechComponent } from '../../components/tech/tech.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { ConsultingComponent } from '../../components/consulting/consulting.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { SolutionsComponent } from '../../components/solutions/solutions.component';

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
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
