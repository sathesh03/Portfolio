import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {

  constructor(@Inject(PLATFORM_ID) private platformId: Object){}
  
  ngAfterViewInit(): void {
      if (isPlatformBrowser(this.platformId)) {
        import('scrollreveal').then((ScrollReveal) => {
          const sr = ScrollReveal.default({
            origin: 'top',
            distance: '80px',
            duration: 1000,
            reset: true,
          });
  
          sr.reveal('.education .box', { interval: 200 });
        });
      }
    }
}
