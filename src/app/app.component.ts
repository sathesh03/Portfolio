import { BreakpointObserver } from '@angular/cdk/layout';
import { isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Portfolio';

  @ViewChild('sidenav') sidenav!: MatSidenav;
  isBrowser: boolean;
  showScrollTop = false;
  isMobile: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object,private observer: BreakpointObserver) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    this.observer.observe(['(max-width: 767px)']).subscribe(result => {
    this.isMobile = result.matches;
  });
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

  // ngAfterViewInit(): void {
  //   if (this.isBrowser) {
  //     // Typed.js
  //     const typed = new Typed('.typing-text', {
  //       strings: [
  //         'Frontend Development',
  //         'Backend Development',
  //         'Web Designing',
  //         'Web Development',
  //         'Full Stack Development',
  //       ],
  //       typeSpeed: 70,
  //       backSpeed: 25,
  //       backDelay: 500,
  //       loop: true
  //     });

  //     // particles.js
  //     // await import('particles.js'); // loads the library and registers global particlesJS
  //     if (isPlatformBrowser(this.platformId)) {
  //       particlesJS('particles-js', {
  //         particles: {
  //           number: { value: 80, density: { enable: true, value_area: 800 } },
  //           color: { value: '#000000' },
  //           shape: { type: 'circle' },
  //           opacity: { value: 0.5 },
  //           size: { value: 5, random: true },
  //           line_linked: {
  //             enable: true,
  //             distance: 150,
  //             color: '#000000',
  //             opacity: 0.4,
  //             width: 1
  //           },
  //           move: {
  //             enable: true,
  //             speed: 6,
  //             direction: 'none',
  //             out_mode: 'out'
  //           }
  //         },
  //         interactivity: {
  //           detect_on: 'canvas',
  //           events: {
  //             onhover: { enable: true, mode: 'repulse' },
  //             onclick: { enable: true, mode: 'push' },
  //             resize: true
  //           },
  //           modes: {
  //             grab: { distance: 400, line_linked: { opacity: 1 } },
  //             bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
  //             repulse: { distance: 200 },
  //             push: { particles_nb: 4 },
  //             remove: { particles_nb: 2 }
  //           }
  //         },
  //         retina_detect: true
  //       });
  //     }
  //   }
  // }

   @ViewChild('homeSection', { static: true }) homeComponent!: any;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.showScrollTop = window.scrollY > 60;
  }

  scrollToHome(): void {    
    if (this.homeComponent?.nativeElement) {
      this.homeComponent.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
  //// DiG Developer Tools
  // @HostListener('document:keydown', ['$event'])
  // handleKeyboardEvent(e: KeyboardEvent): boolean {
  //   if (e.key === 'F12') {
  //     return false;
  //   }
  //   if (e.ctrlKey && e.shiftKey && ['I', 'C', 'J'].includes(e.key.toUpperCase())) {
  //     return false;
  //   }
  //   if (e.ctrlKey && e.key.toUpperCase() === 'U') {
  //     return false;
  //   }
  //   return true;
  // }

  // ngOnDestroy(): void {
  //   this.typed?.destroy(); // clean up to avoid memory leaks
  //   //  document.removeEventListener('visibilitychange', this.visibilityHandler);
  // }
}