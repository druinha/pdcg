import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  scrollToServices() {
    const el = document.getElementById('services');
    el?.scrollIntoView({ behavior: 'smooth' });
  }
}
