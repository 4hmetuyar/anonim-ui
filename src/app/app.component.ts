import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-nav-container></app-nav-container>
  <router-outlet></router-outlet>
  <app-footer></app-footer>

  `,
})
export class AppComponent {
  title = 'Anonim Yazilim';
}
