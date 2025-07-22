import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-cookie-banner',
  imports: [CommonModule],
  templateUrl: './cookie-banner.component.html',
  styleUrl: './cookie-banner.component.scss'
})
export class CookieBannerComponent implements OnInit {

  showBanner = false;
  isBrowser = false;


  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    // Check if the platform is browser
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
  this.isBrowser = isPlatformBrowser(this.platformId);

  if (this.isBrowser) {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      this.showBanner = true;
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
