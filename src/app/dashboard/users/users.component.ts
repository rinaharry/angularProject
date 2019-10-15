import { Component, OnInit, TemplateRef, OnDestroy } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { Subject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {
  users: any;
  modalRef: BsModalRef;
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();
  monRole: string;

  constructor(
    private userService: UserService,
    private toastr: ToastrService,
    private modalService: BsModalService,
    private router: Router,
    private route: ActivatedRoute,
    public authService: AuthenticationService) {}

  ngOnInit() {
    this.monRole = this.authService.currentUser.role;
    this.dtOptions = {
      dom: 'Bfrtip',
      buttons: [
        'copy',
        'excel',
        'print'
      ]
    };
    this.getuser();

  }
  getuser() {
    this.userService.getUsers()
    .subscribe(
      (response) => {

        this.users = response['data'];
        this.dtTrigger.next();
      },
      (error) => {
        this.toastr.error(error.error.result);
      }
    );
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  openModal(template: TemplateRef<any>, user) {
    this.modalRef = this.modalService.show(template);
  }

  deactivate(userAD) {
    this.userService.activateDesactivateUser(userAD)
      .subscribe(
        (response) => {
            const res = response['data'];
            const test =  this.users.find((user: { _id: any; }) => user._id === res._id);
            Object.assign(test, res);
            res.status ?
            this.toastr.info('Le compte de cet utilisateur a été activé') :
            this.toastr.warning('Le compte de cet utilisateur a été désactivé')
        },
        (error) => {
          this.toastr.error(error.error.result);
        }
      );
  }

  adduser() {
    this.userService.user.next(null);
  }

  edituser(user: any) {
    this.userService.user.next(user);
  }

  deletUser(userd) {
    this.userService.deleteUser(userd).subscribe(
      response => {
        const result = this.users.filter(user => user._id !== userd._id);
        this.users = result;
        this.toastr.info('user delete succefull');
      },
      err => {
        console.log(err);
      });
  }


}
