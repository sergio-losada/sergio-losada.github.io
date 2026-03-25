import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { Language, LanguageService } from '../../services/language.service';

interface FooterText {
  contactTitle: string;
  contactSubtitle: string;
  phoneLabel: string;
  locationLabel: string;
  locationValue: string;
  ctaTitle: string;
  ctaDescription: string;
  emailButton: string;
  rightsReserved: string;
  madeWithLabel: string;
  madeWithConnector: string;
}

const FOOTER_TEXT: Record<Language, FooterText> = {
  es: {
    contactTitle: 'Hablamos?',
    contactSubtitle: 'Estoy abierto a nuevos proyectos y oportunidades',
    phoneLabel: 'Telefono',
    locationLabel: 'Ubicacion',
    locationValue: 'Asturias, Espana',
    ctaTitle: 'Tienes un proyecto en mente?',
    ctaDescription: 'Estoy disponible para discutir nuevas oportunidades o proyectos interesantes.',
    emailButton: 'Enviar Email',
    rightsReserved: 'Todos los derechos reservados.',
    madeWithLabel: 'Hecho con',
    madeWithConnector: 'y',
  },
  en: {
    contactTitle: 'Let us talk',
    contactSubtitle: 'I am open to new projects and opportunities',
    phoneLabel: 'Phone',
    locationLabel: 'Location',
    locationValue: 'Asturias, Spain',
    ctaTitle: 'Do you have a project in mind?',
    ctaDescription: 'I am available to discuss new opportunities and interesting projects.',
    emailButton: 'Send Email',
    rightsReserved: 'All rights reserved.',
    madeWithLabel: 'Built with',
    madeWithConnector: 'and',
  },
};

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  readonly currentYear = new Date().getFullYear();
  readonly text: FooterText;

  constructor(private readonly languageService: LanguageService) {
    this.text = FOOTER_TEXT[this.languageService.language];
  }
}
