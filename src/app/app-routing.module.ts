import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GameComponent} from './game/game.component'
import {AboutComponent} from './about/about.component'
import {LoginComponent} from './login/login.component'
import {GamedetailComponent} from './gamedetail/gamedetail.component'

const routes: Routes = [

  {
    path:"",
    component: GameComponent,
   
  },
  {
    path:"game",
    component: GameComponent
  },
  { 
    path: 'gameDetail/:id', 
     component: GamedetailComponent },
  {
    path:"about",
    component: AboutComponent
  },
  {
    path:"login",
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
