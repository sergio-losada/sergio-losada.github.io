import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { Language, LanguageService } from '../../services/language.service';

interface ProjectStat {
  value: string;
  label: string;
}

interface Project {
  title: string;
  company?: string;
  cssClass?: string;
  companyLogo?: string;
  description: string;
  features: string[];
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  mockupUrl?: string;
  stats?: ProjectStat[];
}

interface AdditionalProject {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
}

interface ProjectsContent {
  sectionTitle: string;
  sectionSubtitle: string;
  featuresTitle: string;
  additionalTitle: string;
  codeLabel: string;
  mockupLabel: string;
  projects: Project[];
  additionalProjects: AdditionalProject[];
}

const PROJECTS_CONTENT: Record<Language, ProjectsContent> = {
  es: {
    sectionTitle: 'Proyectos Destacados',
    sectionSubtitle: 'Una seleccion de mis proyectos mas relevantes',
    featuresTitle: 'Caracteristicas principales:',
    additionalTitle: 'Otros Proyectos',
    codeLabel: 'Codigo',
    mockupLabel: 'Mockup del Proyecto',
    projects: [
      {
        title: 'Ondoan Metriks',
        company: 'Ondoan',
        cssClass: 'company-logo-small',
        companyLogo: 'https://www.ondoan.com/soluciones/mantenimiento-de-instalaciones/wp-content/uploads/2019/03/ondoan.png',
        description: 'Dashboard avanzado en Grafana para la gestion de informacion captada por dispositivos IoT distribuidos en el Pais Vasco.',
        features: [
          'Monitorizacion en tiempo real de dispositivos IoT',
          'Visualizacion de estadisticas avanzadas',
          'Interfaz dinamica con graficos personalizados',
          'Integracion con multiples fuentes de datos',
          'Alertas automaticas y notificaciones',
          'Despliegue automatizado',
        ],
        technologies: ['Angular', 'Grafana', 'REST API', 'GitLab CI/CD', 'IoT', 'TypeScript'],
        mockupUrl: 'https://grafana.com/static/assets/img/blog/kubernetes_nginx_dash.png',
        demoUrl: 'https://www.ondoan.com/plataforma-ondoan-metriks-nuevo-servicio-de-captacion-y-analisis-de-datos',
        stats: [
          { value: '100+', label: 'Dispositivos IoT' },
          { value: '99.9%', label: 'Uptime' },
          { value: '24/7', label: 'Monitorizacion' },
        ],
      },
      {
        title: 'Tiqe App',
        company: 'Proyecto Personal',
        cssClass: 'company-logo-short',
        companyLogo:
          'https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/b8/e4/bf/b8e4bf28-c57a-8be4-50c7-046bc54496f3/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/434x0w.webp',
        description: 'Aplicacion completa de gestion de gastos para pisos compartidos con dashboard analitico avanzado.',
        features: [
          'Gestion colaborativa de gastos',
          'Dashboard de analisis de datos',
          'Estadisticas de usuarios por ciudades',
          'Analisis de gastos mas recurrentes',
          'Generacion de reportes informativos',
          'Gestion de tickets de gastos',
        ],
        technologies: ['Angular', 'PHP Laravel', 'MySQL', 'TypeScript', 'REST API'],
        mockupUrl: 'assets/tiqe.jpg',
        demoUrl: 'https://tiqe.app/',
        stats: [
          { value: '300+', label: 'Usuarios activos' },
          { value: '3000+', label: 'Gastos registrados' },
          { value: '100+', label: 'Pisos gestionados' },
        ],
      },
      {
        title: 'Taxco App',
        company: 'Taxco Tortilleria',
        cssClass: 'company-logo-short',
        companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT3vqX1zg3bd1FcBdwMBM-WkN0yGcChCX3jg&s',
        description: 'Aplicacion movil para que los clientes de Taxco Tortilleria realicen pedidos de forma rapida, sencilla y segura desde su telefono.',
        features: [
          'Realizacion de pedidos en segundos',
          'Consulta del historial de pedidos y facturas',
          'Exploracion del catalogo de productos actualizado',
          'Acceso 24/7 para gestionar compras en cualquier momento',
          'Notificaciones de confirmaciones y actualizaciones de pedidos',
          'Repeticion rapida de pedidos recurrentes',
        ],
        technologies: ['Flutter', 'TypeScript', 'Supabase', 'REST API'],
        mockupUrl: 'assets/taxco.png',
        demoUrl: 'https://apps.apple.com/es/app/taxco-tortiller%C3%ADa/id6753689525',
        stats: [
          { value: '50+', label: 'Clientes activos' },
          { value: '100+', label: 'Pedidos gestionados' },
          { value: '99.9%', label: 'Uptime Android e iOS' },
        ],
      },
    ],
    additionalProjects: [
      {
        title: 'Portfolio Personal',
        description: 'Pagina web personal desarrollada en Angular con diseno moderno y responsive.',
        technologies: ['Angular', 'TypeScript', 'SCSS', 'GitHub Pages'],
        githubUrl: 'https://github.com/sergio-losada/sergio-losada.github.io',
      },
      {
        title: 'Microservicio REST API',
        description: 'Arquitectura de microservicios con Spring Boot y contenedores Docker.',
        technologies: ['Java', 'Spring Boot', 'Docker', 'PostgreSQL', 'Jenkins'],
        githubUrl: 'https://github.com/sergio-losada/Java-Spring-MySQL',
      },
      {
        title: 'Grafos',
        description: 'Implementacion en Java de teoria de grafos dirigidos, mediante un diccionario de adyacentes.',
        technologies: ['Java', 'Algorithms', 'Graphs', 'CRUD'],
        githubUrl: 'https://github.com/sergio-losada/Graphs',
      },
    ],
  },
  en: {
    sectionTitle: 'Featured Projects',
    sectionSubtitle: 'A selection of my most relevant projects',
    featuresTitle: 'Key features:',
    additionalTitle: 'Other Projects',
    codeLabel: 'Code',
    mockupLabel: 'Project Mockup',
    projects: [
      {
        title: 'Ondoan Metriks',
        company: 'Ondoan',
        cssClass: 'company-logo-small',
        companyLogo: 'https://www.ondoan.com/soluciones/mantenimiento-de-instalaciones/wp-content/uploads/2019/03/ondoan.png',
        description: 'Advanced Grafana dashboard for managing data captured by IoT devices distributed across the Basque Country.',
        features: [
          'Real-time IoT device monitoring',
          'Advanced statistics visualization',
          'Dynamic interface with custom charts',
          'Integration with multiple data sources',
          'Automated alerts and notifications',
          'Automated deployment',
        ],
        technologies: ['Angular', 'Grafana', 'REST API', 'GitLab CI/CD', 'IoT', 'TypeScript'],
        mockupUrl: 'https://grafana.com/static/assets/img/blog/kubernetes_nginx_dash.png',
        demoUrl: 'https://www.ondoan.com/plataforma-ondoan-metriks-nuevo-servicio-de-captacion-y-analisis-de-datos',
        stats: [
          { value: '100+', label: 'IoT devices' },
          { value: '99.9%', label: 'Uptime' },
          { value: '24/7', label: 'Monitoring' },
        ],
      },
      {
        title: 'Tiqe App',
        company: 'Personal Project',
        cssClass: 'company-logo-short',
        companyLogo:
          'https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/b8/e4/bf/b8e4bf28-c57a-8be4-50c7-046bc54496f3/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/434x0w.webp',
        description: 'End-to-end expense management app for shared flats, including an advanced analytics dashboard.',
        features: [
          'Collaborative expense management',
          'Data analytics dashboard',
          'City-based user statistics',
          'Recurring expense analysis',
          'Informative report generation',
          'Expense ticket management',
        ],
        technologies: ['Angular', 'PHP Laravel', 'MySQL', 'TypeScript', 'REST API'],
        mockupUrl: 'assets/tiqe.jpg',
        demoUrl: 'https://tiqe.app/',
        stats: [
          { value: '300+', label: 'Active users' },
          { value: '3000+', label: 'Logged expenses' },
          { value: '100+', label: 'Managed flats' },
        ],
      },
      {
        title: 'Taxco App',
        company: 'Taxco Tortilleria',
        cssClass: 'company-logo-short',
        companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT3vqX1zg3bd1FcBdwMBM-WkN0yGcChCX3jg&s',
        description: 'Mobile app that allows Taxco Tortilleria customers to place orders quickly, easily, and securely from their phones.',
        features: [
          'Place orders in seconds',
          'Check order and invoice history',
          'Explore an up-to-date product catalog',
          '24/7 access to manage purchases anytime',
          'Notifications for order confirmations and updates',
          'Quick repeat for recurring orders',
        ],
        technologies: ['Flutter', 'TypeScript', 'Supabase', 'REST API'],
        mockupUrl: 'assets/taxco.png',
        demoUrl: 'https://apps.apple.com/es/app/taxco-tortiller%C3%ADa/id6753689525',
        stats: [
          { value: '50+', label: 'Active customers' },
          { value: '100+', label: 'Managed orders' },
          { value: '99.9%', label: 'Android & iOS uptime' },
        ],
      },
    ],
    additionalProjects: [
      {
        title: 'Personal Portfolio',
        description: 'Personal website built with Angular with a modern and responsive design.',
        technologies: ['Angular', 'TypeScript', 'SCSS', 'GitHub Pages'],
        githubUrl: 'https://github.com/sergio-losada/sergio-losada.github.io',
      },
      {
        title: 'REST API Microservice',
        description: 'Microservices architecture with Spring Boot and Docker containers.',
        technologies: ['Java', 'Spring Boot', 'Docker', 'PostgreSQL', 'Jenkins'],
        githubUrl: 'https://github.com/sergio-losada/Java-Spring-MySQL',
      },
      {
        title: 'Graphs',
        description: 'Java implementation of directed graph theory using an adjacency dictionary.',
        technologies: ['Java', 'Algorithms', 'Graphs', 'CRUD'],
        githubUrl: 'https://github.com/sergio-losada/Graphs',
      },
    ],
  },
};

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  readonly content: ProjectsContent;

  constructor(private readonly languageService: LanguageService) {
    this.content = PROJECTS_CONTENT[this.languageService.language];
  }
}
