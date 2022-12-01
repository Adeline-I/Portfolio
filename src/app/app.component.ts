import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  theme: string = "light-theme";
  sidenavColor: string = "sidenav-light-color";
  backgroundColor: string = "background-light";

  constructor(
    private observer: BreakpointObserver,
  ) {}

  ngOnInit(): void {
    this.setDefaultTheme();
  }

  setDefaultTheme() {
    if (localStorage.getItem('theme') &&
        localStorage.getItem('sidenavColor') &&
        localStorage.getItem('backgroundColor')
      ) {
      this.theme = localStorage.getItem('theme') as string;
      const body = document.getElementsByTagName('body')[0];
      body.classList.add(this.theme);

      this.sidenavColor = localStorage.getItem('sidenavColor') as string;
      const sidenav = document.getElementsByTagName('mat-sidenav')[0];
      sidenav.classList.add(this.sidenavColor);

      this.backgroundColor = localStorage.getItem('backgroundColor') as string;
      const background = document.getElementsByTagName('mat-sidenav-container')[0];
      background.classList.add(this.backgroundColor);
    }
  }

  switchTheme() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove(this.theme);
    this.theme === 'light-theme' ?
                    this.theme = 'dark-theme' :
                    this.theme = 'light-theme';
    body.classList.add(this.theme);
    localStorage.setItem('theme', this.theme);

    const sidenav = document.getElementsByTagName('mat-sidenav')[0];
    sidenav.classList.remove(this.sidenavColor);
    this.sidenavColor === 'sidenav-light-color' ?
                    this.sidenavColor = 'sidenav-dark-color' :
                    this.sidenavColor = 'sidenav-light-color';
    sidenav.classList.add(this.sidenavColor);
    localStorage.setItem('sidenavColor', this.sidenavColor);

    const background = document.getElementsByTagName('mat-sidenav-container')[0];
    background.classList.remove(this.backgroundColor);
    this.backgroundColor === 'background-light' ?
                    this.backgroundColor = 'background-dark' :
                    this.backgroundColor = 'background-light';
    background.classList.add(this.backgroundColor);
    localStorage.setItem('backgroundColor', this.backgroundColor);
  }

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 768px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }

}