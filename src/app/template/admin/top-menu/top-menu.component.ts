import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {
  email: string;
  constructor(public authService: AuthenticationService) { }

  ngOnInit() {
      this.email = this.authService.currentUser['email']

  }

}
