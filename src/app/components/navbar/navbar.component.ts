import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isOpen = false;

  menuItems = [
    { label: 'Home', section: 'home' },
    { label: 'Services', section: 'services' },
    { label: 'Tech Stack', section: 'tech-stack' },
    { label: 'Pricing', section: 'pricing' },
    { label: 'Projects', section: 'projects' },
    { label: 'Contact', section: 'contact' },
  ];

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    this.isOpen = false;
  }
}
