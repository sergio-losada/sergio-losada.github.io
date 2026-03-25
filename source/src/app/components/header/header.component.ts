import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Language, LanguageService } from '../../services/language.service';

interface HeaderText {
  navProfile: string;
  navExperience: string;
  navProjects: string;
  navContact: string;
}

const HEADER_TEXT: Record<Language, HeaderText> = {
  es: {
    navProfile: 'Perfil',
    navExperience: 'Trayectoria',
    navProjects: 'Proyectos',
    navContact: 'Contacto',
  },
  en: {
    navProfile: 'Profile',
    navExperience: 'Experience',
    navProjects: 'Projects',
    navContact: 'Contact',
  },
};

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuOpen = false;
  readonly currentLanguage: Language;
  readonly text: HeaderText;

  constructor(private readonly languageService: LanguageService) {
    this.currentLanguage = this.languageService.language;
    this.text = HEADER_TEXT[this.currentLanguage];
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollToSection(sectionId: string, event: Event) {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -60;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    this.isMenuOpen = false;
  }

  setLanguage(language: Language, event: Event) {
    event.preventDefault();
    this.isMenuOpen = false;
    this.languageService.switchLanguage(language);
  }
}
