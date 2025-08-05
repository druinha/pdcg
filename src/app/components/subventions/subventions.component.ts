import { Component, Input  } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-subventions',
  imports: [CommonModule],
  templateUrl: './subventions.component.html',
  styleUrl: './subventions.component.scss',
})
export class SubventionsComponent {
    @Input() lang: string = 'en';
  @Input() translations: any;

  selectedImage: string | null = null;

  openImage(path: string) {
    this.selectedImage = path;
  }

  closeImage() {
    this.selectedImage = null;
  }

}
