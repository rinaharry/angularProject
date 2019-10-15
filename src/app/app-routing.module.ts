import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationGuard } from './authentication.guard';
import { AuthorizationGuard } from './authorization.guard';

import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { UsersComponent } from './dashboard/users/users.component';
import { AddUserComponent } from './dashboard/users/add-user/add-user.component';
import { RegistreComponent } from './registre/registre.component';




const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard/users',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      customLayout: true
    }
  },

  {
    path: 'registre',
    component: RegistreComponent,
    data: {
      customLayout: true
    }
  },
  {
    path: 'dashboard/users',
    component: UsersComponent,
    canActivate: [AuthenticationGuard],
    data: {
      customLayout: false,
      title: 'Liste des collaborateurs',
    }
  },
  {
    path: 'dashboard/users/add',
    component: AddUserComponent,
    canActivate: [AuthenticationGuard],
    data: {
      customLayout: false,
      title: 'Ajouter un collaborateur',

    }
  },
  {
    path: 'dashboard/users/edit/:id',
    component: AddUserComponent,
    canActivate: [AuthenticationGuard],
    data: {
      customLayout: false,
      title: 'Editer les informations',

    }
  },


  {
    path: 'no-access',
    component: NoAccessComponent,
    canActivate: [AuthenticationGuard],
    data: {
      customLayout: false,
      title: 'Aucun accès'
    }
  },
  {
    path: '**',
    component: NotFoundComponent,
    canActivate: [AuthenticationGuard],
      data: {
        customLayout: false,
        title: 'Page introuvable'
      }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
