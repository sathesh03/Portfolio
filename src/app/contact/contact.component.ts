import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { log } from 'console';
import emailjs from 'emailjs-com';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
  contact: FormGroup;
  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private spinner: NgxSpinnerService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.contact = this.fb.group({
      Name: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      Reason: ['', Validators.required],
    });
  }

  @ViewChild('contactForm') contactFormRef!: ElementRef;
  ngOnInit(): void {
    emailjs.init('ZK92b4rTfm9-WfJvN');
  }

  allowOnlyLetters(event: KeyboardEvent): void {
    const key = event.key;
    if (!/^[a-zA-Z\s]$/.test(key)) {
      event.preventDefault();
    }
  }

  allowOnlyDigits(event: KeyboardEvent): void {
    const key = event.key;
    if (!/^\d$/.test(key)) {
      event.preventDefault();
    }
  }

  submit(event: Event) {
    if (this.contact.invalid) return;
    event.preventDefault();
    this.spinner.show();
    const templateParams = {
      name: this.contact.value.Name,
      email: this.contact.value.Email,
      phone: this.contact.value.Phone,
      message: this.contact.value.Reason,
    };

    emailjs
      .send(
        'service_v4ltq5x', // Your actual service ID
        'template_htnbiar', // Your template ID
        templateParams
      )
      .then(() => {
        this.spinner.hide();
        this.snackBar.open('Email sent successfully!', 'Close', {
          duration: 4000,
          panelClass: ['snackbar-success'],
          verticalPosition: 'top',
        });
        this.contact.reset();
      })
      .catch((error) => {
        console.error('Email send error:', error);
        this.spinner.hide();
        this.snackBar.open('Email sent successfully!', 'Close', {
          duration: 4000,
          panelClass: ['snackbar-success'],
          verticalPosition: 'top',
        });
      });
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      import('scrollreveal').then((ScrollReveal) => {
        const sr = ScrollReveal.default({
          origin: 'top',
          distance: '80px',
          duration: 1000,
          reset: true,
        });

        sr.reveal('.contact .container', { delay: 400 });
        sr.reveal('.contact .container .form-group', { delay: 400 });
      });
    }
  }
}
