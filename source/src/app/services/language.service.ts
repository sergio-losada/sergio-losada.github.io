import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

export type Language = 'es' | 'en';

interface SeoContent {
  title: string;
  description: string;
  canonicalPath: string;
}

const PREFERRED_LANGUAGE_KEY = 'preferred-language';
const WEBSITE_ORIGIN = 'https://sergio-losada.github.io';

const SEO_CONTENT: Record<Language, SeoContent> = {
  es: {
    title: 'Sergio Losada - Ingeniero de Software',
    description:
      'Portafolio de Sergio Losada, Ingeniero de Software especializado en Desarrollo Web y Arquitecturas Cloud.',
    canonicalPath: '/',
  },
  en: {
    title: 'Sergio Losada - Software Engineer',
    description:
      'Portfolio of Sergio Losada, Software Engineer specialized in Web Development and Cloud Architectures.',
    canonicalPath: '/en/',
  },
};

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  readonly language: Language;

  private readonly windowRef = this.document.defaultView;

  constructor(@Inject(DOCUMENT) private readonly document: Document) {
    const windowRef = this.windowRef;
    if (!windowRef) {
      this.language = 'es';
      return;
    }

    if (this.shouldRedirectToEnglish(windowRef.location.pathname)) {
      this.storeLanguage('en');
      const hash = windowRef.location.hash ?? '';
      windowRef.location.replace(`/en/${hash}`);
      this.language = 'en';
      return;
    }

    this.language = this.detectLanguageFromPath(windowRef.location.pathname);
    this.storeLanguage(this.language);
    this.updateDocumentLanguage(this.language);
    this.updateSeoTags(this.language);
  }

  switchLanguage(targetLanguage: Language): void {
    const windowRef = this.windowRef;
    if (!windowRef || targetLanguage === this.language) {
      return;
    }

    this.storeLanguage(targetLanguage);
    const hash = windowRef.location.hash ?? '';
    const targetPath = targetLanguage === 'en' ? '/en/' : '/';
    windowRef.location.assign(`${targetPath}${hash}`);
  }

  private detectLanguageFromPath(pathname: string): Language {
    return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'es';
  }

  private shouldRedirectToEnglish(pathname: string): boolean {
    const windowRef = this.windowRef;
    if (!windowRef || this.isEnglishPath(pathname) || this.isLocalhost(windowRef.location.hostname)) {
      return false;
    }

    if (!this.isHomePath(pathname)) {
      return false;
    }

    const preferredLanguage = this.getStoredLanguage();
    if (preferredLanguage) {
      return preferredLanguage === 'en';
    }

    const browserLanguage = windowRef.navigator.language.toLowerCase();
    return browserLanguage.startsWith('en');
  }

  private isEnglishPath(pathname: string): boolean {
    return pathname === '/en' || pathname.startsWith('/en/');
  }

  private isHomePath(pathname: string): boolean {
    return pathname === '/' || pathname === '/index.html';
  }

  private isLocalhost(hostname: string): boolean {
    return hostname === 'localhost' || hostname === '127.0.0.1';
  }

  private getStoredLanguage(): Language | null {
    const language = this.windowRef?.localStorage.getItem(PREFERRED_LANGUAGE_KEY);
    if (language === 'es' || language === 'en') {
      return language;
    }
    return null;
  }

  private storeLanguage(language: Language): void {
    this.windowRef?.localStorage.setItem(PREFERRED_LANGUAGE_KEY, language);
  }

  private updateDocumentLanguage(language: Language): void {
    this.document.documentElement.lang = language;
  }

  private updateSeoTags(language: Language): void {
    const seo = SEO_CONTENT[language];
    const canonicalUrl = `${WEBSITE_ORIGIN}${seo.canonicalPath}`;

    this.document.title = seo.title;
    this.setMetaTag('name', 'description', seo.description);
    this.setMetaTag('property', 'og:title', seo.title);
    this.setMetaTag('property', 'og:description', seo.description);
    this.setMetaTag('property', 'og:url', canonicalUrl);
    this.setMetaTag('name', 'twitter:title', seo.title);
    this.setMetaTag('name', 'twitter:description', seo.description);
    this.setCanonical(canonicalUrl);
    this.setAlternateLinks();
  }

  private setMetaTag(selectorType: 'name' | 'property', selectorValue: string, content: string): void {
    const selector = `meta[${selectorType}="${selectorValue}"]`;
    const currentTag = this.document.head.querySelector(selector);

    if (currentTag) {
      currentTag.setAttribute('content', content);
      return;
    }

    const newTag = this.document.createElement('meta');
    newTag.setAttribute(selectorType, selectorValue);
    newTag.setAttribute('content', content);
    this.document.head.appendChild(newTag);
  }

  private setCanonical(href: string): void {
    let canonicalTag = this.document.head.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = this.document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      this.document.head.appendChild(canonicalTag);
    }

    canonicalTag.setAttribute('href', href);
  }

  private setAlternateLinks(): void {
    this.setAlternateLink('es', `${WEBSITE_ORIGIN}/`);
    this.setAlternateLink('en', `${WEBSITE_ORIGIN}/en/`);
    this.setAlternateLink('x-default', `${WEBSITE_ORIGIN}/`);
  }

  private setAlternateLink(hreflang: string, href: string): void {
    const selector = `link[rel="alternate"][hreflang="${hreflang}"]`;
    let alternateTag = this.document.head.querySelector(selector);

    if (!alternateTag) {
      alternateTag = this.document.createElement('link');
      alternateTag.setAttribute('rel', 'alternate');
      alternateTag.setAttribute('hreflang', hreflang);
      this.document.head.appendChild(alternateTag);
    }

    alternateTag.setAttribute('href', href);
  }
}
