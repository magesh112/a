import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { Routes,RouterModule} from '@angular/router';
import { NopageComponent } from './nopage/nopage.component';

const route:Routes=[
  {path:'', component:AuthComponent},
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'**', component:NopageComponent}
];

@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(route)
  ],
  declarations: [AuthComponent,HomeComponent,LoginComponent]
})
export class AuthenticationModule { }