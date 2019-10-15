import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  invalidLogin: Boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthenticationService,
    private toastr: ToastrService
  ) { }

  signIn(credentials: {email: any; password: any; }) {
    if (credentials.email && credentials.password) {
      this.authService.login(credentials)
        .subscribe(
          (response) => {
            if (response) {
              console.log(response)
              const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
              this.router.navigate([returnUrl || '/dashboard/users']);
              this.toastr.success('Content de te revoir !');
            } else {
              this.invalidLogin = true;
            }
          },
          (error) => {
            console.log(error)
            this.invalidLogin = true;
          });
    }
  }

}
