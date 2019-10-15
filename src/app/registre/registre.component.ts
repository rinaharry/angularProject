import { Component, OnInit, ɵConsole,OnDestroy } from '@angular/core';

import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent implements OnInit {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.createForm()
  }
  createForm() {
    const test = true;
    this.form = this.fb.group({
 
      firstName: [ '', [Validators.required, Validators.minLength(2)]],
      lastName: [ '', [Validators.required, Validators.minLength(2)]],
      email: [ '', [ Validators.required, Validators.email]],
      adrress: [ '', Validators.required],
      contact: [ '', Validators.required],
      password: [ '', Validators.required ],
    });
  }

  onSubmit() {
   console.log(this.form.value)
    this.userService.createUser(this.form.value)
      .subscribe(
        (response) => {
          this.toastr.success('Le collaborateur a été ajouté dans la base.');
          this.form.reset();
          this.router.navigate([ '/login']);
        },
        (error) => {
          this.toastr.error('user not register');
        }
      );
  }


}
