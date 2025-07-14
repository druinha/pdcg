import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-webapp',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-webapp.component.html',
  styleUrl: './contact-webapp.component.scss',
})
export class ContactWebappComponent {
  devForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.devForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      type: ['web', Validators.required],
      budget: [''],
      timeline: [''],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.devForm.valid) {
      const formData = this.devForm.value;
      console.log('Send this data to API or email service:', formData);
      // You can integrate EmailJS, Formspree, or your API here
    }
  }
}
