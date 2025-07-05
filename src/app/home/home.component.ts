import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  @ViewChild('homeRoot', { static: true }) homeRoot!: ElementRef;

get nativeElement() {
  return this.homeRoot.nativeElement;
}
}
