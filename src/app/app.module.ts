import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Custom components

import { UserFormComponent } from './components/forms/user-form/user-form.component';

// Material components

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NotFoundPageComponent } from './components/pages/not-found-page/not-found-page.component';
import { MainPageComponent } from './components/pages/main-page/main-page.component';
import { UsersPageComponent } from './components/pages/users-page/users-page.component';


@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    UserFormComponent,
    NotFoundPageComponent,
    MainPageComponent,
    UsersPageComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  providers: []
})
export class AppModule { }
