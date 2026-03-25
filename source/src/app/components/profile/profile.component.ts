import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { Language, LanguageService } from '../../services/language.service';

interface TechItem {
  name: string;
  icon: string;
}

interface StatItem {
  value: string;
  label: string;
}

interface ProfileText {
  imageAlt: string;
  jobTitle: string;
  description: string;
  caption: string;
  contactButton: string;
  techTitle: string;
  stats: StatItem[];
}

interface ProfileData {
  linkedinUrl: string;
  githubUrl: string;
  techStack: TechItem[];
}

const PROFILE_TEXT: Record<Language, ProfileText> = {
  es: {
    imageAlt: 'Mi foto de perfil',
    jobTitle: 'Ingeniero de Software',
    description:
      'Graduado en Ingenieria Informatica en Tecnologias de la Informacion por la Universidad de Oviedo, actualmente trabajando como Ingeniero de Software con experiencia en el desarrollo de soluciones Web Full Stack y despliegue de infraestructuras en la nube.',
    caption: 'Especializado en arquitecturas Cloud, microservicios y DevOps.',
    contactButton: 'Contactar',
    techTitle: 'Stack Tecnologico Principal',
    stats: [
      { value: '4+', label: 'Anios de Experiencia' },
      { value: '10+', label: 'Tecnologias Dominadas' },
      { value: '100%', label: 'Proyectos Entregados' },
    ],
  },
  en: {
    imageAlt: 'My profile picture',
    jobTitle: 'Software Engineer',
    description:
      'Computer Engineering graduate, specialized in Information Technologies at the University of Oviedo, currently working as a Software Engineer with hands-on experience building Full Stack Web solutions and deploying cloud infrastructure.',
    caption: 'Specialized in Cloud architectures, microservices, and DevOps.',
    contactButton: 'Get in touch',
    techTitle: 'Main Tech Stack',
    stats: [
      { value: '4+', label: 'Years of Experience' },
      { value: '10+', label: 'Core Technologies' },
      { value: '100%', label: 'Delivered Projects' },
    ],
  },
};

const PROFILE_DATA: ProfileData = {
  linkedinUrl: 'https://linkedin.com/in/sergio-losada-gonzalez',
  githubUrl: 'https://github.com/sergio-losada',
  techStack: [
    {
      name: 'Java Spring Boot',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
    },
    {
      name: 'Angular',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg',
    },
    {
      name: 'TypeScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    },
    {
      name: 'Flutter',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
    },
    {
      name: 'AWS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    },
    {
      name: 'MySQL',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    },
    {
      name: 'Docker',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    },
    {
      name: 'Kubernetes',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
    },
    {
      name: 'GitHub Actions',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    },
    {
      name: 'Terraform',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg',
    },
  ],
};

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  readonly profileData: ProfileData = PROFILE_DATA;
  readonly text: ProfileText;

  constructor(private readonly languageService: LanguageService) {
    this.text = PROFILE_TEXT[this.languageService.language];
  }

  scrollToSection(sectionId: string, event: Event) {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }
}
