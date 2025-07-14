import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-consulting',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-consulting.component.html',
  styleUrl: './contact-consulting.component.scss',
})
export class ContactConsultingComponent {
  consultingForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.consultingForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      service: ['strategy', Validators.required],
      company: [''],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.consultingForm.valid) {
      console.log(this.consultingForm.value);
    }
  }
}
