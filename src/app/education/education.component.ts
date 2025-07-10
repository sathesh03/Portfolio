import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      import('scrollreveal').then((ScrollReveal) => {
        const sr = ScrollReveal.default({
          origin: 'top',
          distance: '80px',
          duration: 1000,
          reset: true,
        });

        sr.reveal('.education .head', { interval: 200 });
      });
    }
  }

  Education: any = [
    { image: "assets/images/educat/ug.png", degree: 'Bachelor of Science in Mathematics', college: 'Sacred Heart College (Autonomous), Tirupattur(Dt) - 635 601', passedout: '2019-2022', status: 'Completed' },
    { image: "/assets/images/educat/school.webp", degree: 'Maths & Biology', college: 'E.R.K Higher Secondary School, Harur, Dharmapuri(Dt) - 636 905', passedout: '2017-2019', status: 'Completed' }
  ]
}
