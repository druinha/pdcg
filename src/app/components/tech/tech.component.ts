import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tech',
  imports: [CommonModule],
  templateUrl: './tech.component.html',
  styleUrl: './tech.component.scss',
})
export class TechComponent {
  techCategories = [
    {
      category: 'Mobile Development',
      technologies: [
        'Ionic',
        'Capacitor',
        'Cordova',
        'Android Studio',
        'Xcode',
        'PWA',
      ],
      color: 'from-blue-500 to-orange-500',
    },
    {
      category: 'Design & Prototyping',
      technologies: [
        'Figma',
        'UI/UX Design',
        'Wireframing',
        'Prototyping',
        'Design Systems',
      ],
      color: 'from-orange-500 to-yellow-500',
    },
    {
      category: 'Frontend Development',
      technologies: [
        'Angular',
        'TypeScript',
        'JavaScript',
        'HTML5',
        'CSS3',
        'Tailwind CSS',
        'Bootstrap',
      ],
      color: 'from-blue-500 to-cyan-400',
    },
    {
      category: 'Backend & Database',
      technologies: [
        'Firebase',
        'MySQL',
        'Redis',
        'Neo4j',
        'RESTful APIs',
        'Node.js',
      ],
      color: 'from-orange-500 to-red-500',
    },
    {
      category: 'Cloud & Deployment',
      technologies: [
        'Google Cloud',
        'App Store Connect',
        'Google Play Console',
        'Firebase Hosting',
      ],
      color: 'from-blue-500 to-indigo-500',
    },
    {
      category: 'Development Tools',
      technologies: [
        'Android Studio',
        'Xcode',
        'Apple Developer Console',
        'Google Developer Console',
      ],
      color: 'from-yellow-500 to-orange-500',
    },
  ];

  workflow = [
    'Figma Design',
    'Angular/Ionic Development',
    'Capacitor Integration',
    'Native Testing',
    'App Store Deployment',
    'Cloud Hosting',
  ];
}
