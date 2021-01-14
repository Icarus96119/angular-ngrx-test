import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';

import { appRoutes, toAbsolutePath } from './core/data/routes';
import { ScrollPosition } from './core/data/scroll-pos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() { }

}
