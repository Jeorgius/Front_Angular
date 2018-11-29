import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from "./AppComponent";
import { NewsComponent } from './news/news.component';
import { MusicComponent } from './music/music.component';
import { PhotosComponent } from './photos/photos.component';
import { StoreComponent } from './store/store.component';
import { UsersComponent } from './users/users.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';

import { HttpClientModule } from '@angular/common/http';
import { NewsService } from '../services/news.service';
import { PhotosService } from '../services/photos.service';
import { UserService } from '../services/user.service';
import { StoreService } from '../services/store.service';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { MusicService } from '../services/music.service';
import { LoginComponent } from './login/login.component';
import { LoginService } from '../services/login.service';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    MusicComponent,
    PhotosComponent,
    StoreComponent,
    UsersComponent,
    AboutComponent,
    RegisterComponent,
    UserDetailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ 
    NewsService,
    UserService,
    StoreService,
    PhotosService,
    MusicService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
