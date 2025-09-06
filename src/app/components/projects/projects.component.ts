import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ProjectStat {
  value: string;
  label: string;
}

interface Project {
  title: string;
  company?: string;
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
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projectsData: Project[] = [
    {
      title: 'Ondoan Metriks',
      company: 'Ondoan',
      companyLogo: 'https://via.placeholder.com/60x60/059669/ffffff?text=OM',
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
      mockupUrl: 'https://grafana.com/static/img/grafana/showcase_visualize.jpg',
      stats: [
        { value: '100+', label: 'Dispositivos IoT' },
        { value: '99.9%', label: 'Uptime' },
        { value: '24/7', label: 'Monitorización' }
      ]
    },
    {
      title: 'Tiqe App',
      company: 'Proyecto Personal',
      companyLogo: 'https://via.placeholder.com/60x60/059669/ffffff?text=TA',
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
      mockupUrl: 'assets/tiqe-mockup.jpeg',
      stats: [
        { value: '50+', label: 'Usuarios activos' },
        { value: '1000+', label: 'Gastos registrados' },
        { value: '10+', label: 'Pisos gestionados' }
      ]
    },
  ];

  additionalProjects: AdditionalProject[] = [
    {
      title: 'Portfolio Personal',
      description: 'Página web personal desarrollada en Angular con diseño moderno y responsive.',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'GitHub Pages'],
      githubUrl: 'https://github.com/sergio-losada'
    },
    {
      title: 'API REST Microservicios',
      description: 'Arquitectura de microservicios con Spring Boot y contenedores Docker.',
      technologies: ['Java', 'Spring Boot', 'Docker', 'PostgreSQL', 'Jenkins'],
      githubUrl: 'https://github.com/sergio-losada'
    },
    {
      title: 'Dashboard Analytics',
      description: 'Dashboard de analytics en tiempo real con integración de múltiples fuentes de datos.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js', 'WebSockets'],
      githubUrl: 'https://github.com/sergio-losada'
    }
  ];
}