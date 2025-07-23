import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { LanguageService } from '../../services/language.service';

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
  ) {
    // Check if the platform is browser
    this.isBrowser = isPlatformBrowser(this.platformId);
     this.langService.lang$.subscribe((l) => {
      this.lang = l;
    });
  }

  ngOnInit(): void {
  this.isBrowser = isPlatformBrowser(this.platformId);

  if (this.isBrowser) {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      this.showBanner = true;
    }
    else if (consent === 'accepted') {
      this.showBanner = false;
    } else if (consent === 'rejected') {
      this.showBanner = false;
    }
  }
}


  acceptCookies(): void {
  if (this.isBrowser) {
    localStorage.setItem('cookie-consent', 'accepted');
    this.showBanner = false;
  }
}

rejectCookies(): void {
  if (this.isBrowser) {
    localStorage.setItem('cookie-consent', 'rejected');
    this.showBanner = false;
  }
}

}
