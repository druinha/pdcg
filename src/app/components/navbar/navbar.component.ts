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

  scrollToSection(sectionId: string) {
    const el = document.getElementById(sectionId);
    el?.scrollIntoView({ behavior: 'smooth' });
    this.isOpen = false;
  }
}
