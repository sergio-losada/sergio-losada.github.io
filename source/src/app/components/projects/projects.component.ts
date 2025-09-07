import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

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

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projectsData: Project[] = [
    {
      title: 'Ondoan Metriks',
      company: 'Ondoan',
      cssClass: 'company-logo-small',
      companyLogo: 'https://www.ondoan.com/soluciones/mantenimiento-de-instalaciones/wp-content/uploads/2019/03/ondoan.png',
      description: 'Dashboard avanzado en Grafana para la gestión de información captada por dispositivos IoT distribuidos en el País Vasco.',
      features: [
        'Monitorización en tiempo real de dispositivos IoT',
        'Visualización de estadísticas avanzadas',
        'Interfaz dinámica con gráficos personalizados',
        'Integración con múltiples fuentes de datos',
        'Alertas automáticas y notificaciones',
        'Despliegue automatizado'
      ],
      technologies: ['Angular', 'Grafana', 'REST API', 'GitLab CI/CD', 'IoT', 'TypeScript'],
      mockupUrl: 'https://grafana.com/static/assets/img/blog/kubernetes_nginx_dash.png',
      demoUrl: 'https://www.ondoan.com/plataforma-ondoan-metriks-nuevo-servicio-de-captacion-y-analisis-de-datos',
      stats: [
        { value: '100+', label: 'Dispositivos IoT' },
        { value: '99.9%', label: 'Uptime' },
        { value: '24/7', label: 'Monitorización' }
      ]
    },
    {
      title: 'Tiqe App',
      company: 'Proyecto Personal',
      cssClass: 'company-logo-short',
      companyLogo: 'https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/b8/e4/bf/b8e4bf28-c57a-8be4-50c7-046bc54496f3/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/434x0w.webp',
      description: 'Aplicación completa de gestión de gastos para pisos compartidos con dashboard analítico avanzado.',
      features: [
        'Gestión colaborativa de gastos',
        'Dashboard de análisis de datos',
        'Estadísticas de usuarios por ciudades',
        'Análisis de gastos más recurrentes',
        'Generación de reportes informativos',
        'Gestión de tickets de gastos'
      ],
      technologies: ['Angular', 'PHP Laravel', 'MySQL', 'TypeScript', 'REST API'],
      mockupUrl: 'https://scontent-mad2-1.xx.fbcdn.net/v/t1.6435-9/171550849_168022458508369_3118436008399243020_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=k3X_FW12ssUQ7kNvwHsPIaO&_nc_oc=Adk7o9WjcOfUOpm8dYolrMum7A8DfdAuWFXJW1zDwbOhehMQHJX-kHDr4hAjuWQbPZI&_nc_zt=23&_nc_ht=scontent-mad2-1.xx&_nc_gid=na3BxJmOuhx-ARR1NTAh3g&oh=00_Afa5e8KiwlJD37FMIY8j_Q5q1_vLE8zfM1eVHeMSa7b6jA&oe=68E4A372',
      demoUrl: 'https://tiqe.app/',
      stats: [
        { value: '300+', label: 'Usuarios activos' },
        { value: '3000+', label: 'Gastos registrados' },
        { value: '100+', label: 'Pisos gestionados' }
      ]
    },
  ];

  additionalProjects: AdditionalProject[] = [
    {
      title: 'Portfolio Personal',
      description: 'Página web personal desarrollada en Angular con diseño moderno y responsive.',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'GitHub Pages'],
      githubUrl: 'https://github.com/sergio-losada/sergio-losada.github.io'
    },
    {
      title: 'Microservicio REST API',
      description: 'Arquitectura de microservicios con Spring Boot y contenedores Docker.',
      technologies: ['Java', 'Spring Boot', 'Docker', 'PostgreSQL', 'Jenkins'],
      githubUrl: 'https://github.com/sergio-losada/Java-Spring-MySQL'
    },
    {
      title: 'Grafos',
      description: 'Implementación en Java de Teoría de Grafos dirigidos, mediante un Diccionario de adyacentes.',
      technologies: ['Java', 'Algorithms', 'Graphs', 'CRUD'],
      githubUrl: 'https://github.com/sergio-losada/Graphs'
    }
  ];
}