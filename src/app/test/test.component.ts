import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent implements AfterViewInit {

  isMobile:boolean = false
  @ViewChild('sidenav') sidenav!: MatSidenav;
  
  constructor(private observer: BreakpointObserver,private cdRef: ChangeDetectorRef){ }

  ngAfterViewInit(): void {
    this.observer.observe(['(max-width: 767px)']).subscribe(result => {
      this.isMobile = result.matches;
      this.cdRef.detectChanges(); // make sure sidenav gets initialized
    });
  }

  toggleMenu() {
     if (this.isMobile && this.sidenav) {
    this.sidenav.toggle();
  }
  }

  closeSidenav() {
  if (this.isMobile && this.sidenav) {
    this.sidenav.close();
  }
}
}
