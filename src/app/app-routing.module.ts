import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MusicComponent } from './music/music.component';
import { NewsComponent } from './news/news.component';
import { PhotosComponent } from './photos/photos.component';
import { RegisterComponent } from './register/register.component';
import { StoreComponent } from './store/store.component';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';


const routes: Routes = [
  {path: '', redirectTo: '/news', pathMatch: 'full' },
  {path: 'about', component: AboutComponent},
  {path: 'music', component: MusicComponent},
  {path: 'news', component: NewsComponent},
  {path: 'photos', component: PhotosComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'store', component: StoreComponent},
  {path: 'users', component: UsersComponent},
  {path: 'users/:nickname', component: UserDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routeComponents = [
  AboutComponent, 
  MusicComponent,
  NewsComponent,
  PhotosComponent,
  RegisterComponent,
  StoreComponent,
  UsersComponent,
  UserDetailComponent
]