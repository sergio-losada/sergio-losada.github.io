import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TechItem {
  name: string;
  icon: string;
}

interface ProfileData {
  description: string;
  caption: string;
  linkedinUrl: string;
  githubUrl: string;
  techStack: TechItem[];
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  profileData: ProfileData = {
    description: `Graduado en Ingeniería Informática en Tecnologías de la Información por la Universidad de Oviedo, 
    actualmente trabajando como Ingeniero de Software con experiencia en el desarrollo de soluciones Web FullStack 
    y despliegue de infraestructuras en la Nube.`,
    caption: 'Especializado en arquitecturas Cloud, Microservicios y DevOps.',
    linkedinUrl: 'https://linkedin.com/in/sergio-losada-gonzalez',
    githubUrl: 'https://github.com/sergio-losada',
    techStack: [
      {
        name: 'Java Spring Boot',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg'
      },
      {
        name: 'Angular',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg'
      },
      {
        name: 'TypeScript',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
      },
      {
        name: 'Flutter',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg'
      },
      {
        name: 'AWS',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg'
      },
      {
        name: 'MySQL',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
      },
      {
        name: 'Docker',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
      },
      {
        name: 'Kubernetes',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg'
      },
      {
        name: 'GitHub Actions',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
      },
      {
        name: 'Terraform',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg'
      }
    ]
  };

  scrollToSection(sectionId: string, event: Event) {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}