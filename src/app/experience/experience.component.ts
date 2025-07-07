import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      import('scrollreveal').then((ScrollReveal) => {
        const sr = ScrollReveal.default({
          origin: 'top',
          distance: '80px',
          duration: 1000,
          reset: true,
        });

        sr.reveal('.experience .timeline', { delay: 400 });
        sr.reveal('.experience .timeline .container', { interval: 400 });
      });
    }
  }
}
