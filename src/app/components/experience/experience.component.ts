import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  position: string;
  company: string;
  location: string;
  period: string;
  description: string;
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
      description: 'Despliegue de infraestructura en AWS y gestión de procesos DevOps de CI/CD. Uso de AWS CDK en TypeScript, mantenimiento y observabilidad de sistemas Java mediante Datadog y AWS CloudWatch Logs. Desarrollo de aplicaciones web con Angular y NodeJS, despliegue mediante pipelines CI/CD en GitHub Actions, y contenerización de servicios usando Docker y Kubernetes (EKS).',
      technologies: ['AWS CDK', 'TypeScript', 'Java', 'Angular', 'NodeJS', 'Docker', 'Kubernetes', 'GitHub Actions', 'Datadog'],
      companyLogo: 'https://media.licdn.com/dms/image/C4D0BAQGQs8T8wTKKdg/company-logo_200_200/0/1630511737325/rithum_logo?e=2147483647&v=beta&t=8vQJ8wJ8J8J8J8J8J8J8J8J8J8J8J8J8J8J8J8J8J8J8'
    },
    {
      position: 'Junior Engineer',
      company: 'NTT Data',
      location: 'Oviedo, Asturias - Remoto',
      period: 'Septiembre 2022 - Julio 2023',
      description: 'Diseño de arquitecturas cloud en AWS utilizando CDK y CloudFormation. Implementación de IaC (Infraestructura como Código) con AWS CDK en Python para despliegue de recursos, complementada con Terraform para Azure. Integración de despliegues en pipelines de GitLab CI/CD y elaboración de diagramas técnicos de arquitecturas bajo metodologías ágiles y Scrum.',
      technologies: ['AWS CDK', 'Python', 'CloudFormation', 'Terraform', 'Azure', 'GitLab CI/CD', 'Scrum'],
      companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/NTT_Data_logo.svg/2560px-NTT_Data_logo.svg.png'
    },
    {
      position: 'Backend Developer',
      company: 'TSK, Electrónica y Electricidad',
      location: 'Gijón, Asturias - Presencial',
      period: 'Agosto 2021 - Enero 2022',
      description: 'Infraestructura web basada en microservicios desplegados en contenedores. Desarrollo de APIs REST con Java Spring Boot, con foco en escalabilidad y despliegue mediante contenedores Docker utilizando pipelines de CI/CD en Jenkins. Aplicaciones siguiendo buenas prácticas como el patrón de capas y principios de microservicios, integradas con bases de datos SQL (MySQL y PostgreSQL) y NoSQL (Cassandra y MongoDB), así como con otros servicios REST y SOAP.',
      technologies: ['Java', 'Spring Boot', 'Docker', 'Jenkins', 'MySQL', 'PostgreSQL', 'MongoDB', 'Cassandra', 'REST', 'SOAP'],
      companyLogo: 'https://www.tsk.es/wp-content/uploads/2020/02/logo-tsk.png'
    }
  ];
}