import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Portfolio';

  private typed: Typed | undefined;
  isBrowser: boolean;
  showScrollTop = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      // visibilitychange logic
      document.addEventListener('visibilitychange', () => {
        const favicon = document.getElementById('favicon') as HTMLLinkElement;

        if (document.visibilityState === 'visible') {
          document.title = 'Portfolio | Sathesh G';
          if (favicon) favicon.href = 'assets/images/favicon.png';
        } else {
          document.title = 'Come Back To Portfolio';
          if (favicon) favicon.href = 'assets/images/favhand.png';
        }
      });
    }
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      // Typed.js
      const typed = new Typed('.typing-text', {
        strings: [
          'Frontend Development',
          'Backend Development',
          'Web Designing',
          'Web Development',
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
  }

   @ViewChild('homeSection', { static: true }) homeSection!: ElementRef;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.showScrollTop = window.scrollY > 60;
  }

  scrollToHome(): void {
    if (this.homeSection?.nativeElement) {
      this.homeSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  ngOnDestroy(): void {
    this.typed?.destroy(); // clean up to avoid memory leaks
    //  document.removeEventListener('visibilitychange', this.visibilityHandler);
  }
}
