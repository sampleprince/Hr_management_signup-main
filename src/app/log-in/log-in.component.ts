import { Component } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  registerForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    });

    counter = 1;

constructor(private fb: FormBuilder,  public apiservice:ApiService){}
ngOnInit() {
  const PAT_EMAIL = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,4}$";
  this.registerForm = this.fb.group(
  {
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
})

}
onSubmit(data:any){
}
showPassword = false;
showPasswordIcon = 'fa-eye';

togglePasswordVisibility(passwordInput: any) {
  this.showPassword = !this.showPassword;
  this.showPasswordIcon = this.showPassword ? 'fa-eye-slash' : 'fa-eye';
  passwordInput.type = this.showPassword ? 'text' : 'password';
}

}
