import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private langSubject = new BehaviorSubject<'en' | 'es' | 'gl'>('es');
  lang$ = this.langSubject.asObservable();

  setLang(lang: 'en' | 'es' | 'gl') {
    this.langSubject.next(lang);
  }

  get currentLang(): 'en' | 'es' | 'gl' {
    return this.langSubject.value;
  }
}
