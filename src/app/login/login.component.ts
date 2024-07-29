import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';


import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { UserdataService } from '../userdata.service';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, ReactiveFormsModule, MatIconModule, MatInputModule, MatFormFieldModule, CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',

})
export class LoginComponent {
  readonly email = new FormControl('', [Validators.required, Validators.email]);
  dataUsername: any = 'nitish@gmail.com'
  dataPassword: any = 'nitish@123'
  isLoginSuccess: any;
  isSubmitted: any = false
  showpassword: any = false

  router = inject(Router)


  onShowPassword(){
    this.showpassword =!this.showpassword
    console.log(this.showpassword)
  }


  loginForm: FormGroup = new FormGroup({
    username: new FormControl('nitish@gmail.com', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password: new FormControl('q1234', [Validators.required])
  })

  constructor(private userdata: UserdataService) {
  }

 
 passwordError :any = false

  onLogin() {
    this.isSubmitted = true
    this.isLoginSuccess = this.userdata.validateUser(this.loginForm.value.username, this.loginForm.value.password)

    if (this.isLoginSuccess) {
      console.log('Login Success')
      this.userdata.setLoginStatus(true)
      this.loginForm.reset()
      this.router.navigateByUrl('/')
   
    }else{
      this.userdata.setLoginStatus(true)
      this.passwordError = 'Enter valid Username and Password'
      console.log('Login Failed')
    }

  }

}
