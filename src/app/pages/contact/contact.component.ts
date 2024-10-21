import { CommonModule, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule, NgClass],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

  contactForm!: FormGroup;

  ngOnInit(): void {

  }
  constructor(private formbuilder : FormBuilder)
  {
    this.contactForm = this.formbuilder.group({
      email: ['',Validators.required, Validators.email],
      message: ['', Validators.required, Validators.minLength(30)]
    });
  }

  enviar(event : Event)
  {
    event.preventDefault();

  }

  hasErrors(field: string, errorType: string) {
      return this.contactForm.get('field')?.hasError(errorType) && this.contactForm.get('field')?.touched;
    }
}
