import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import Typed from 'typed.js';
import VanillaTilt from 'vanilla-tilt';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {

  @ViewChild('homeRoot', { static: true }) homeRoot!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: Object,private elRef: ElementRef) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
  
  isBrowser: boolean;
  private typed: Typed | undefined;
get nativeElement() {
  return this.homeRoot.nativeElement;
}

async ngAfterViewInit(): Promise<void> {
    if (this.isBrowser) {
      // Typed.js
      const typed = new Typed('.typing-text', {
        strings: [
          'Frontend Development',
          'Backend Development',
          'Web Designing',
          'Web Development',
          'ERP Development',
          'Full Stack Development',
        ],
        typeSpeed: 70,
        backSpeed: 25,
        backDelay: 500,
        loop: true
      });

      // particles.js
      // await import('particles.js'); // loads the library and registers global particlesJS
      if (isPlatformBrowser(this.platformId)) {
      //  await import('particles.js');
        particlesJS('particles-js', {
          particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: '#000000' },
            shape: { type: 'circle' },
            opacity: { value: 0.5 },
            size: { value: 5, random: true },
            line_linked: {
              enable: true,
              distance: 150,
              color: '#000000',
              opacity: 0.4,
              width: 1
            },
            move: {
              enable: true,
              speed: 6,
              direction: 'none',
              out_mode: 'out'
            }
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: { enable: true, mode: 'repulse' },
              onclick: { enable: true, mode: 'push' },
              resize: true
            },
            modes: {
              grab: { distance: 400, line_linked: { opacity: 1 } },
              bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
              repulse: { distance: 200 },
              push: { particles_nb: 4 },
              remove: { particles_nb: 2 }
            }
          },
          retina_detect: true
        });
      }
    }

    if (isPlatformBrowser(this.platformId)) {
      import('scrollreveal').then((ScrollReveal) => {
        const sr = ScrollReveal.default({
          origin: 'top',
          distance: '80px',
          duration: 1000,
          reset: true
        });

        sr.reveal('.content h3', { delay: 200 });
        sr.reveal('.content p', { delay: 200 });
        sr.reveal('.content .btn', { delay: 200 });
        sr.reveal('.image', { delay: 400 });
        sr.reveal('.linkedin', { interval: 600 });
        sr.reveal('.github', { interval: 800 });
        sr.reveal('.twitter', { interval: 1000 });
        sr.reveal('.telegram', { interval: 600 });
        sr.reveal('.instagram', { interval: 600 });
        sr.reveal('.dev', { interval: 600 });
      });
    }

    const elements = this.elRef.nativeElement.querySelectorAll('.tilt');
    VanillaTilt.init(elements, {
      max: 15,
      speed: 400,
      glare: true,
      "max-glare": 0.2
    });
  }

   ngOnDestroy(): void {
    this.typed?.destroy(); // clean up to avoid memory leaks
    //  document.removeEventListener('visibilitychange', this.visibilityHandler);
  }
}