import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movie-lounge';

  navbg: any = {
    'background-color': 'rgba(0, 0, 0, 0.8)' 
  };

  @HostListener('document:scroll', [])
  scrollover() {
    const offset = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (offset > 0) {
      this.navbg = {
        'background-color': '#000000', 
        'transition': 'background-color 0.3s ease-in-out' 
      };
    } else {
      this.navbg = {
        'background-color': 'rgba(0, 0, 0, 0.8)',
        'transition': 'background-color 0.3s ease-in-out' 
      };
    }
  }
}
