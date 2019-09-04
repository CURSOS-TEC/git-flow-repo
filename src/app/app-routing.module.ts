import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { NewsComponent } from './pages/news/news.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full', component: HomeComponent
  },
  {
    path: 'news',
    pathMatch: 'full', component: NewsComponent
  },
  {
    path: 'home',
    pathMatch: 'full', component: HomeComponent
  },
  {
    path: 'about',
    pathMatch: 'full', component: AboutComponent
  },
  {
    path: 'contact',
    pathMatch: 'full', component: ContactComponent
  },

  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
