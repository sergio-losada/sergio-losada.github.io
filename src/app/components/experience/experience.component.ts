import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experienceData: Experience[] = [
    {
      position: 'Cloud Software Engineer',
      company: 'Rithum',
      location: 'Madrid - Remoto',
      period: 'Agosto 2023 - Actualidad',
      description: 'Despliegue de infraestructura en AWS y gestión de procesos DevOps de CI/CD. Uso de AWS CDK en TypeScript, mantenimiento y observabilidad de sistemas Java mediante Datadog y AWS CloudWatch Logs.',
      caption: 'Desarrollo de aplicaciones web con Angular y NodeJS, despliegue mediante pipelines CI/CD en GitHub Actions, y contenerización de servicios usando Docker y Kubernetes (EKS).',
      technologies: ['AWS CDK', 'TypeScript', 'Java', 'Angular', 'NodeJS', 'Docker', 'Kubernetes', 'GitHub Actions', 'Datadog'],
      companyLogo: 'https://notes.rithum.com/logos/Rithum-logo-mark-purple.png'
    },
    {
      position: 'Junior Engineer',
      company: 'NTT Data',
      location: 'Oviedo, Asturias - Remoto',
      period: 'Septiembre 2022 - Julio 2023',
      description: 'Diseño de arquitecturas cloud en AWS utilizando CDK y CloudFormation. Implementación de IaC (Infraestructura como Código) con AWS CDK en Python para despliegue de recursos, complementada con Terraform para Azure.',
      caption: 'Integración de despliegues en pipelines de GitLab CI/CD y elaboración de diagramas técnicos de arquitecturas bajo metodologías ágiles y Scrum.',
      technologies: ['AWS CDK', 'Python', 'CloudFormation', 'Terraform', 'Azure', 'GitLab CI/CD', 'Scrum'],
      companyLogo: 'https://www.redseguridad.com/wp-content/uploads/sites/2/2024/07/nttdata-logofutureblue-1500x1000px-750x500.png'
    },
    {
      position: 'Backend Developer',
      company: 'TSK, Electrónica y Electricidad',
      location: 'Gijón, Asturias - Presencial',
      period: 'Agosto 2021 - Enero 2022',
      description: 'Infraestructura web basada en microservicios desplegados en contenedores.',
      caption: 'Desarrollo de APIs REST con Java Spring Boot, con foco en escalabilidad y despliegue mediante contenedores Docker utilizando pipelines de CI/CD en Jenkins. Aplicaciones siguiendo buenas prácticas como el patrón de capas y principios de microservicios, integradas con bases de datos SQL (MySQL y PostgreSQL) y NoSQL (Cassandra y MongoDB), así como con otros servicios REST y SOAP.',
      technologies: ['Java', 'Spring Boot', 'Docker', 'Jenkins', 'MySQL', 'PostgreSQL', 'MongoDB', 'Cassandra', 'REST/SOAP'],
      companyLogo: 'https://www.grupotsk.com/wp-content/themes/tsk/img/logo-tsk.png'
    }
  ];
}