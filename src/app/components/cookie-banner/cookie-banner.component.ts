import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { CookiesServiceService } from '../../services/cookies-service.service';

@Component({
  selector: 'app-cookie-banner',
  imports: [CommonModule],
  templateUrl: './cookie-banner.component.html',
  styleUrl: './cookie-banner.component.scss'
})
export class CookieBannerComponent implements OnInit {
  lang: 'en' | 'es' | 'gl' = 'en';
  translations = {
    en: {
      title: 'Cookie Policy',
      description: 'We use cookies to improve your experience on our site.',
      accept: 'Accept',
      reject: 'Reject',
    },
    es: {
      title: 'Política de Cookies',
      description: 'Utilizamos cookies para mejorar su experiencia en nuestro sitio.',
      accept: 'Aceptar',
      reject: 'Rechazar',
    },
    gl: {
      title: 'Política de Cookies',
      description: 'Usamos cookies para mellorar a súa experiencia no noso sitio.',
      accept: 'Aceptar',
      reject: 'Rexeitar',
    },
  };
  showBanner = false;
  isBrowser = false;


  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private langService: LanguageService,
    private cookieConsentService: CookiesServiceService
  ) 
  {
    this.isBrowser = isPlatformBrowser(this.platformId); // ✅ set this first!

  if (this.isBrowser) {
    this.cookieConsentService.consent$.subscribe(consent => {
      this.showBanner = consent === null;
    });
  }
     this.langService.lang$.subscribe((l) => {
      this.lang = l;
    });
  }

  ngOnInit(): void {

  if (this.isBrowser) {
    const consent = this.cookieConsentService.getConsent();
    this.showBanner = consent === null;
  }
}


acceptCookies() {
  this.cookieConsentService.setConsent('accepted');
  this.showBanner = false;
}

rejectCookies() {
  this.cookieConsentService.setConsent('rejected');
  this.showBanner = false;
}

}
