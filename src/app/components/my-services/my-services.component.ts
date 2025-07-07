import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-services',
  imports: [CommonModule],
  templateUrl: './my-services.component.html',
  styleUrl: './my-services.component.scss',
})
export class MyServicesComponent {
  services = [
    {
      icon: '📱',
      title: 'Hybrid Mobile App Development',
      description:
        'Cross-platform mobile apps with native performance using Ionic, Capacitor, and Cordova. One codebase, multiple platforms.',
      features: [
        'iOS & Android',
        'Single Codebase',
        'Native Performance',
        'Cost-Effective',
      ],
      color: 'blue-orange',
    },
    {
      icon: '💻',
      title: 'Angular Applications',
      description:
        'Enterprise-grade Angular applications with modern architecture, perfect for web and mobile platforms.',
      features: [
        'SPA Development',
        'TypeScript',
        'Material Design',
        'PWA Ready',
      ],
      color: 'orange-yellow',
    },
    {
      icon: '⚡',
      title: 'UI/UX Design & Prototyping',
      description:
        'Complete design solutions using Figma for wireframes, prototypes, and high-fidelity designs before development.',
      features: [
        'Figma Designs',
        'User Experience',
        'Prototyping',
        'Design Systems',
      ],
      color: 'blue-cyan',
    },
    {
      icon: '🗄️',
      title: 'Backend Development',
      description:
        'Robust backend solutions with modern databases and cloud infrastructure for your mobile and web apps.',
      features: [
        'MySQL & Neo4j',
        'Firebase Integration',
        'Redis Caching',
        'RESTful APIs',
      ],
      color: 'orange-red',
    },
    {
      icon: '☁️',
      title: 'Cloud Deployment',
      description:
        'Scalable app deployment and management using Google Cloud Platform with continuous integration.',
      features: [
        'GCP Integration',
        'App Store Deployment',
        'Performance Monitoring',
        'Auto Scaling',
      ],
      color: 'blue-indigo',
    },
    {
      icon: '🌐',
      title: 'WordPress Development',
      description:
        'Budget-friendly WordPress websites and e-commerce solutions for clients who need quick, cost-effective solutions.',
      features: [
        'Custom Themes',
        'WooCommerce',
        'SEO Optimization',
        'Budget-Friendly',
      ],
      color: 'yellow-orange',
    },
  ];
}
