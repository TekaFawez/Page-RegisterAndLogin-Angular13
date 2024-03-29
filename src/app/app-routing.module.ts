import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {

    path:'',
    component:RegisterComponent,
  },
  {
    path:'login',
    component:LoginComponent,
  },
  {
    
      path:'register',
      component:RegisterComponent,
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
