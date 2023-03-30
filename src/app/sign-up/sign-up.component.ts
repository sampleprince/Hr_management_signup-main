import { Component } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { matchpassword } from './custom.validator';

@Component({
selector: 'app-sign-up',
templateUrl: './sign-up.component.html',
styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

registerForm: FormGroup = new FormGroup({
name: new FormControl(''),
email: new FormControl(''),
password: new FormControl(''),
cPassword: new FormControl('')
});

counter = 1;

constructor(private fb: FormBuilder, public apiservice:ApiService){}

ngOnInit() {
const PAT_EMAIL = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,4}$";
this.registerForm = this.fb.group(
{
name: [
'',
[
Validators.required,
Validators.minLength(6),
Validators.maxLength(20)
]
],
email: ['', [Validators.required, Validators.pattern(PAT_EMAIL)]],
password: [
'',
[
Validators.required,
Validators.pattern(
/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
),
Validators.minLength(8),
],
],
cPassword: [
'',
[
Validators.required ],
]

}
)
{
  validators:matchpassword
}
}


matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
return (registerForm: FormGroup): {[key: string]: any} => {
let password = registerForm.controls[passwordKey];
let confirmPassword = registerForm.controls[confirmPasswordKey];

if (password.value !== confirmPassword.value) {
return {
mismatchedPasswords: true
};
} else {
return {};
}
}
}

  onSubmit(data:any) {

}

get pasword(){
  return this.registerForm.get('password');
  }


showPassword = false;
showPasswordIcon = 'fa-eye';

togglePasswordVisibility(passwordInput: any) {
  this.showPassword = !this.showPassword;
  this.showPasswordIcon = this.showPassword ? 'fa-eye-slash' : 'fa-eye';
  passwordInput.type = this.showPassword ? 'text' : 'password';
}

showPassword1 = false;
showPasswordIcon1 = 'fa-eye';
togglePassword(passwordInpu: any) {
  this.showPassword1 = !this.showPassword1;
  this.showPasswordIcon1 = this.showPassword1 ? 'fa-eye-slash' : 'fa-eye';
  passwordInpu.type = this.showPassword1 ? 'text' : 'password';
}
}
