import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserFormComponent } from './components/forms/user-form/user-form.component';
import { MainPageComponent } from './components/pages/main-page/main-page.component';
import { NotFoundPageComponent } from './components/pages/not-found-page/not-found-page.component';
import { UsersPageComponent } from './components/pages/users-page/users-page.component';

const routes: Routes = [
  {
    children: [
      {
        component: UserFormComponent,
        path: 'form'
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: '/users'
      },
      {
        component: UsersPageComponent,
        path: ''
      }
    ],
    path: 'users'
  },
  {
    component: MainPageComponent,
    path: ''
  },
  {
    component: NotFoundPageComponent,
    path: '**',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
