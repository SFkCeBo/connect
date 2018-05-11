import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

// FIREBASE 
import { AngularFireModule } from 'angularfire2'; 
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

// AUTH
import { AuthService } from './services/auth.service';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthGuard } from './guards/auth.guard';

// ANIMATION
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FlashMessagesService } from 'angular2-flash-messages';


// COMPONENTS
import { UsersComponent } from './components/users/users.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { UserComponent } from './components/users/user/user.component';

// SERVICES
import { UserService } from './services/user.service';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { NavbarPageComponent } from './components/navbar-page/navbar-page.component';
import { LogedPageComponent } from './components/loged-page/loged-page.component';
import { PrivatePageComponent } from './components/private-page/private-page.component';
import { NotfoundPageComponent } from './components/notfound-page/notfound-page.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'privado' , component: PrivatePageComponent,canActivate:[AuthGuard]},
  { path: '**', component: NotfoundPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsersListComponent,
    UserComponent,
    HomePageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    NavbarPageComponent,
    LogedPageComponent,
    PrivatePageComponent,
    NotfoundPageComponent
  ],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(routes),
    AngularFireAuthModule,
    FlashMessagesModule
  ],
  providers: [
    UserService,
    AuthService,
    AuthGuard,
    FlashMessagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
