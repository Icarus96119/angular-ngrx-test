import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';

import { appRoutes, toAbsolutePath } from '../core/data/routes';
import { ScrollPosition } from '../core/data/scroll-pos';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    private router: Router,
    private scrollToService: ScrollToService
  ) { }

  ngOnInit(): void {
  }

  navigate(): void {
    this.router.navigateByUrl(toAbsolutePath(appRoutes.creditCardManagement)).then(() => {
      this.scrollToService.scrollTo({ target: ScrollPosition.Root });
    });
  }

}
