import { Component, OnInit, Output, EventEmitter, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navitation-bar',
  templateUrl: './navitation-bar.component.html',
  styleUrls: ['./navitation-bar.component.scss']
})
export class NavitationBarComponent implements OnInit {

  @Output() scrollTo = new EventEmitter();
  @Output() toggleMenu = new EventEmitter();

  toggleOpened: any = false;
  fixedView = false;

  constructor() { }

  ngOnInit(): void {
  }

  onScrollTo(direction) {
    this.scrollTo.emit(direction);
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    if (window.pageYOffset > 60) {
      this.fixedView = true;
    } else {
      this.fixedView = false;
    }
  }

  toggle() {
    this.toggleMenu.emit();
  }

}
