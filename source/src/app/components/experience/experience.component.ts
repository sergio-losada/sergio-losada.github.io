import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { Language, LanguageService } from '../../services/language.service';

interface Experience {
  position: string;
  company: string;
  location: string;
  period: string;
  description: string;
  caption: string;
  technologies: string[];
  companyLogo: string;
}

interface SpokenLanguage {
  name: string;
  level: string;
  certified?: boolean;
}

interface ExperienceContent {
  sectionTitle: string;
  sectionSubtitle: string;
  educationTitle: string;
  degreeTitle: string;
  degreeSpecialization: string;
  university: string;
  languagesTitle: string;
  certifiedLabel: string;
  experiences: Experience[];
  spokenLanguages: SpokenLanguage[];
}

const EXPERIENCE_CONTENT: Record<Language, ExperienceContent> = {
  es: {
    sectionTitle: 'Trayectoria Profesional',
    sectionSubtitle: 'Mi experiencia y crecimiento en el desarrollo de software',
    educationTitle: 'Formacion Academica',
    degreeTitle: 'Graduado en Ingenieria Informatica',
    degreeSpecialization: 'Especialidad en Tecnologias de la Informacion',
    university: 'Universidad de Oviedo',
    languagesTitle: 'Idiomas',
    certifiedLabel: 'Certificado',
    experiences: [
      {
        position: 'Cloud Software Engineer',
        company: 'Rithum',
        location: 'Madrid - Remoto',
        period: 'Agosto 2023 - Actualidad',
        description:
          'Despliegue de infraestructura en AWS y gestion de procesos DevOps de CI/CD. Uso de AWS CDK en TypeScript, mantenimiento y observabilidad de sistemas Java mediante Datadog y AWS CloudWatch Logs.',
        caption:
          'Desarrollo de aplicaciones web con Angular y NodeJS, despliegue mediante pipelines CI/CD en GitHub Actions, y contenerizacion de servicios usando Docker y Kubernetes (EKS).',
        technologies: ['AWS CDK', 'TypeScript', 'Java', 'Angular', 'NodeJS', 'Docker', 'Kubernetes', 'GitHub Actions', 'Datadog'],
        companyLogo: 'https://notes.rithum.com/logos/Rithum-logo-mark-purple.png',
      },
      {
        position: 'Junior Engineer',
        company: 'NTT Data',
        location: 'Oviedo, Asturias - Remoto',
        period: 'Septiembre 2022 - Julio 2023',
        description:
          'Disenio de arquitecturas cloud en AWS utilizando CDK y CloudFormation. Implementacion de IaC con AWS CDK en Python para despliegue de recursos, complementada con Terraform para Azure.',
        caption:
          'Integracion de despliegues en pipelines de GitLab CI/CD y elaboracion de diagramas tecnicos de arquitecturas bajo metodologias agiles y Scrum.',
        technologies: ['AWS CDK', 'Python', 'CloudFormation', 'Terraform', 'Azure', 'GitLab CI/CD', 'Scrum'],
        companyLogo: 'https://www.redseguridad.com/wp-content/uploads/sites/2/2024/07/nttdata-logofutureblue-1500x1000px-750x500.png',
      },
      {
        position: 'Backend Developer',
        company: 'TSK, Electronica y Electricidad',
        location: 'Gijon, Asturias - Presencial',
        period: 'Agosto 2021 - Enero 2022',
        description: 'Infraestructura web basada en microservicios desplegados en contenedores.',
        caption:
          'Desarrollo de APIs REST con Java Spring Boot, con foco en escalabilidad y despliegue mediante contenedores Docker usando pipelines de CI/CD en Jenkins. Aplicaciones siguiendo buenas practicas como el patron de capas y principios de microservicios, integradas con bases de datos SQL (MySQL y PostgreSQL), NoSQL (Cassandra y MongoDB), y otros servicios REST y SOAP.',
        technologies: ['Java', 'Spring Boot', 'Docker', 'Jenkins', 'MySQL', 'PostgreSQL', 'MongoDB', 'Cassandra', 'REST/SOAP'],
        companyLogo: 'https://www.grupotsk.com/wp-content/themes/tsk/img/logo-tsk.png',
      },
    ],
    spokenLanguages: [
      { name: 'Espanol', level: 'Nativo' },
      { name: 'Ingles', level: 'Cambridge Advanced C1', certified: true },
      { name: 'Frances', level: 'Nivel Intermedio' },
    ],
  },
  en: {
    sectionTitle: 'Professional Journey',
    sectionSubtitle: 'My experience and growth in software development',
    educationTitle: 'Academic Background',
    degreeTitle: 'BSc in Computer Engineering',
    degreeSpecialization: 'Specialization in Information Technologies',
    university: 'University of Oviedo',
    languagesTitle: 'Languages',
    certifiedLabel: 'Certified',
    experiences: [
      {
        position: 'Cloud Software Engineer',
        company: 'Rithum',
        location: 'Madrid - Remote',
        period: 'August 2023 - Present',
        description:
          'Deployment of AWS infrastructure and management of DevOps CI/CD workflows. Daily usage of AWS CDK in TypeScript, plus maintenance and observability of Java systems through Datadog and AWS CloudWatch Logs.',
        caption:
          'Development of web applications with Angular and NodeJS, CI/CD delivery through GitHub Actions pipelines, and containerized services running on Docker and Kubernetes (EKS).',
        technologies: ['AWS CDK', 'TypeScript', 'Java', 'Angular', 'NodeJS', 'Docker', 'Kubernetes', 'GitHub Actions', 'Datadog'],
        companyLogo: 'https://notes.rithum.com/logos/Rithum-logo-mark-purple.png',
      },
      {
        position: 'Junior Engineer',
        company: 'NTT Data',
        location: 'Oviedo, Asturias - Remote',
        period: 'September 2022 - July 2023',
        description:
          'Design of AWS cloud architectures using CDK and CloudFormation. Implementation of IaC with AWS CDK in Python for resource provisioning, complemented by Terraform for Azure environments.',
        caption:
          'Integration of deployments into GitLab CI/CD pipelines and creation of technical architecture diagrams under agile and Scrum methodologies.',
        technologies: ['AWS CDK', 'Python', 'CloudFormation', 'Terraform', 'Azure', 'GitLab CI/CD', 'Scrum'],
        companyLogo: 'https://www.redseguridad.com/wp-content/uploads/sites/2/2024/07/nttdata-logofutureblue-1500x1000px-750x500.png',
      },
      {
        position: 'Backend Developer',
        company: 'TSK, Electronica y Electricidad',
        location: 'Gijon, Asturias - On-site',
        period: 'August 2021 - January 2022',
        description: 'Web infrastructure based on microservices deployed in containers.',
        caption:
          'Development of REST APIs with Java Spring Boot, focused on scalability and deployment through Docker containers and Jenkins CI/CD pipelines. Applications built with layered architecture and microservices principles, integrated with SQL databases (MySQL and PostgreSQL), NoSQL databases (Cassandra and MongoDB), and other REST/SOAP services.',
        technologies: ['Java', 'Spring Boot', 'Docker', 'Jenkins', 'MySQL', 'PostgreSQL', 'MongoDB', 'Cassandra', 'REST/SOAP'],
        companyLogo: 'https://www.grupotsk.com/wp-content/themes/tsk/img/logo-tsk.png',
      },
    ],
    spokenLanguages: [
      { name: 'Spanish', level: 'Native' },
      { name: 'English', level: 'Cambridge Advanced C1', certified: true },
      { name: 'French', level: 'Intermediate level' },
    ],
  },
};

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  readonly content: ExperienceContent;

  constructor(private readonly languageService: LanguageService) {
    this.content = EXPERIENCE_CONTENT[this.languageService.language];
  }
}
