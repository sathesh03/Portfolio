import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import VanillaTilt from 'vanilla-tilt';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private elRef: ElementRef
  ) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      import('scrollreveal').then((ScrollReveal) => {
        const sr = ScrollReveal.default({
          origin: 'top',
          distance: '80px',
          duration: 1000,
          reset: true,
        });

        sr.reveal('.about .content h3', { delay: 200 });
        sr.reveal('.about .content .tag', { delay: 200 });
        sr.reveal('.about .content p', { delay: 200 });
        sr.reveal('.about .content .box-container', { delay: 200 });
        sr.reveal('.about .content .resumebtn', { delay: 200 });
      });
    }

    const elements = this.elRef.nativeElement.querySelectorAll('.tilt');
    VanillaTilt.init(elements, {
      max: 15,
      speed: 400,
      glare: true,
      'max-glare': 0.2,
    });
  }
}