import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects = [
    {
      title: 'SocialVibes App',
      description:
        'A social media and event platform built for real-time interaction, content sharing, and community engagement.',
      image: 'https://images.unsplash.com/photo-1581092580505-5c54a5a0cde0',
      tech: ['Ionic', 'Angular', 'Python', 'Firebase', 'Redis', 'Neo4j', 'GCP'],
      category: 'Mobile & Web App',
      live: '', // or your production URL
      code: '', // or GitHub URL
    },
    {
      title: 'IBDi Medical App',
      description:
        'A clinical support and tracking app for patients with IBD, used in a medical research study.',
      image: 'https://images.unsplash.com/photo-1588776814546-ec7e6b1ee3b3',
      tech: ['Ionic', 'Angular', 'Python', 'Firebase', 'GCP'],
      category: 'Healthcare App',
      live: '',
      code: '',
    },
    {
      title: 'Niquita Rengøring Website',
      description:
        'A WordPress-based website for a professional cleaning company with service pages and contact forms.',
      image: 'https://images.unsplash.com/photo-1581579185169-3c164e8b0306',
      tech: ['WordPress', 'PHP', 'MySQL', 'SEO'],
      category: 'Web Development',
      live: '',
      code: '',
    },
    {
      title: 'Happy Feet Rengøring',
      description:
        'A modern Angular website for a Danish cleaning service company, optimized for performance and mobile.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
      tech: ['Angular', 'TypeScript', 'Tailwind', 'Firebase Hosting'],
      category: 'Web Application',
      live: '',
      code: '',
    },
  ];
}
