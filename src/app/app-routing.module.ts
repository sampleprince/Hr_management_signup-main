import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
  path:"log-in",
  component:LogInComponent,
  pathMatch:"full"
  },
  {path:"sign-up",
component:SignUpComponent,
pathMatch:"full"
},
{path:"forgetpassword",
component:ForgetpasswordComponent,
pathMatch:"full"
},
{
  path:"",
  component:SignUpComponent,
  pathMatch:"full"
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
