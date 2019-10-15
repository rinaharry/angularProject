import { Component, OnInit, ɵConsole,OnDestroy } from '@angular/core';

import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {  Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit, OnDestroy {
  form: FormGroup;
  userupdata: any = {};
  usersSubscription = new Subscription();
  userOK: Boolean = false;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private toastr: ToastrService
    ) { }

  ngOnInit() {

   this.usersSubscription = this.userService.user.subscribe(
     (data: any) => {
        if (data) {
        this.userupdata = data,
        this.userOK = true;
       } else {
        this.userOK = false;
        this.router.navigate([ '/dashboard/users/add']);
       }
      }
   );
   this.createForm();

  }

  ngOnDestroy(): void {
    this.usersSubscription.unsubscribe();

  }
  createForm() {
    const test = true;
    this.form = this.fb.group({
      _id: [this.userupdata._id ? this.userupdata._id : ''],
      firstName: [this.userupdata.firstName ? this.userupdata.firstName : '', [Validators.required, Validators.minLength(2)]],
      lastName: [this.userupdata.lastName ? this.userupdata.lastName : '', [Validators.required, Validators.minLength(2)]],
      email: [this.userupdata.email ? this.userupdata.email : '', [ Validators.required, Validators.email]],
      adrress: [this.userupdata.adrress ? this.userupdata.adrress : '', Validators.required],
      contact: [this.userupdata.contact ? this.userupdata.contact : '', Validators.required],
      password: [this.userupdata.password ? this.userupdata.password : '',
                 this.userOK ? Validators.nullValidator : Validators.required ],
    });
  }

  onSubmit() {
    delete this.form.value['_id'];
    this.userService.createUser(this.form.value)
      .subscribe(
        (response) => {
          this.toastr.info('Le collaborateur a été ajouté dans la base.');
          this.form.reset();
          this.router.navigate([ '/dashboard/users']);
        },
        (error) => {
          this.toastr.error("user not save");
        }
      );
  }

  onUpdate() {
    delete this.form.value['password'],
     this.userService.updateUser(this.form.value)
     .subscribe(
      (response) => {
        this.toastr.info('Le collaborateur a été mis a jour');
        this.form.reset();
        this.router.navigate([ '/dashboard/users']);
      },
      (error) => {
        this.toastr.error('user not update');
      }
     )
  }
}
