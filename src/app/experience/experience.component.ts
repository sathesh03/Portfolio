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
        sr.reveal('.experience .timeline .timeline-container', { interval: 400 });
      });
    }
  }

  Experience:any = [
    {projectname:'Real Time Dashboard',
      description:`Integrated a real-time dashboard into ERP to visualize critical metrics such as shift performance, downtime and material flow.`,
      duration:'Jan 2025 - present',direction:'right'
    },
    {projectname:'Facility Management System',
      description:`Integrated facility management features into ERP to centralize gate pass approvals, asset logs and visitor entries.`,
      duration:'Sep 2024 - Jan 2025',direction:'left'
    },
    {projectname:'Quality Management System',
      description:`Integrated a QMS into ERP to manage manual quality inspections, verification and NCR handling across manufacturing units.`,
      duration:'Nov 2023 - Aug 2024',direction:'right'
    },
    {projectname:'Production Management System',
      description:`Integrated a Production Management module into ERP to streamline work orders, machine usage and shift planning.`,
      duration:'Nov 2022 - Oct 2023',direction:'left'
    },
    {projectname:'HRMS - Performance Appraisal',
      description:`Developed an Angular-based HRMS module to automate employee evaluations and feedback`,
      duration:'Aug 2022 - Oct 2022',direction:'right'
    }
  ]
}
