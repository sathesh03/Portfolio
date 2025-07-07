import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import VanillaTilt from 'vanilla-tilt';

interface Project {
  name: string;
  image: string;
  desc: string;
  category: string;
  links: {
    view: string;
    code: string;
  };
}

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
allProjects: Project[] = [
    {
      name: 'My Portfolio',
      image: 'portfolio',
      desc: 'A personal portfolio website built with Angular.',
      category: 'web',
      links: {
        view: 'https://your-portfolio.netlify.app',
        code: 'https://github.com/you/portfolio'
      }
    },
    {
      name: 'Some Android App',
      image: 'androidapp',
      desc: 'A mobile app project.',
      category: 'android',
      links: {
        view: '#',
        code: '#'
      }
    },
    // Add more...
  ];

  filteredProjects: Project[] = [];

  ngOnInit(): void {
    // Filter out "android" and take first 10
    this.filteredProjects = this.allProjects
      .filter(project => project.category !== 'android')
      .slice(0, 10);
  }

   @ViewChild('projectContainer', { static: false }) containerRef!: ElementRef;
  ngAfterViewInit(): void {
    // const elements = document.querySelectorAll('.tilt');
    // VanillaTilt.init(elements, {
    //   max: 15,
    //   speed: 400,
    //   glare: true,
    //   'max-glare': 0.3
    // });
 if (isPlatformBrowser(this.platformId)) {
      const elements = Array.from(
        document.querySelectorAll<HTMLElement>('.tilt')
      );
      VanillaTilt.init(elements, {
        max: 15,
        speed: 400,
        glare: true,
        'max-glare': 0.2
      });
    }
}
}