import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'angular-admin-lte';
import { AuthenticationService } from './services/authentication.service';

import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public isCustomLayout: boolean;

  constructor(
    private layoutService: LayoutService,
    private authService: AuthenticationService) {
      setTheme('bs3');
  }

  ngOnInit() {
    this.layoutService.isCustomLayout
      .subscribe(
        (value: boolean) => {
          this.isCustomLayout = value;
        }
      );
  }

}
