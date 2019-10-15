import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-user-left',
  templateUrl: './user-left.component.html',
  styleUrls: ['./user-left.component.css']
})
export class UserLeftComponent implements OnInit {
  monPrenom: string;

  constructor(public authService: AuthenticationService) { }

  ngOnInit() {
    this.monPrenom = this.authService.currentUser.prenom;
  }

}
