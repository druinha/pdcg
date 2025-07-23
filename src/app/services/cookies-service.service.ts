import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CookiesServiceService {

 private consentSubject = new BehaviorSubject<'accepted' | 'rejected' | null>(null);
  consent$ = this.consentSubject.asObservable();

  setConsent(value: 'accepted' | 'rejected') {
    localStorage.setItem('cookie-consent', value);
    this.consentSubject.next(value);
  }

  removeConsent() {
    localStorage.removeItem('cookie-consent');
    this.consentSubject.next(null);
  }

  getConsent() {
    return localStorage.getItem('cookie-consent') as 'accepted' | 'rejected' | null;
  }

  showBanner() {
  this.consentSubject.next(null); // this tells components to show the banner
}
}



