import { CommonModule, NgIf } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormControl, FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { UserdataService } from '../userdata.service';
import { SignuppopupComponent } from '../signuppopup/signuppopup.component';
import {
  MatDialog,
} from '@angular/material/dialog';
import { PopupserviceService } from '../popupservice.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, NgIf, MatTooltipModule, SignuppopupComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  passDataToPopup: any;

  constructor(public userData: UserdataService, private dialogRef: MatDialog, private popup: PopupserviceService) { }

  emailFormat: any = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
 passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/;
  signupForm: FormGroup = new FormGroup({
    firstname: new FormControl('Nitish', [Validators.required,Validators.maxLength(15),Validators.pattern('^[a-zA-Z]+$')]),
    lastname: new FormControl('C', [Validators.required,Validators.maxLength(8),Validators.pattern('^[a-zA-Z]+$')]),
    email: new FormControl('nitish@gmail.com', [Validators.required, Validators.email, Validators.pattern(this.emailFormat)]),
    // confirmEmail : new FormControl(null,[Validators.required]),
    password: new FormControl('q@1234', [Validators.required , Validators.minLength(5),Validators.pattern(this.passwordPattern)]),
    confirmPassword: new FormControl('q@1234', [Validators.required],),
    // gender : new FormControl('',[Validators.required]),
    dob: new FormControl('12/01/2024', [Validators.required,]),
  })


  progress: any = 0

  calculateProgress() {
    const totalControls = Object.keys(this.signupForm.controls).length;
    let completedControls = 0;
    for (const controlName in this.signupForm.controls) {
      if (this.signupForm.get(controlName)?.valid) {
        completedControls++;
      }
    }
    this.progress = Math.round((completedControls / totalControls) * 100);

  }



  passwordDidMatch: any = false

  onChangeConfirmPassword(e: any) {
    this.passwordDidMatch = this.signupForm.value.password === e.target.value

    console.log(this.passwordDidMatch, 'match')

  }

  ngOnChanges() {
    this.calculateProgress()
  }
  openPopUp() {
    this.dialogRef.open(SignuppopupComponent)
  }


ngDoCheck(){
  this.calculateProgress()
}


  onSubmit() {
    this.calculateProgress()
    this.passDataToPopup = this.signupForm.value
    this.passwordDidMatch = this.signupForm.value.password === this.signupForm.value.confirmPassword


    this.signupForm.markAllAsTouched()
    if (this.passwordDidMatch && this.signupForm.valid) {
      this.popup.setPopupHeading('signup details')
      this.popup.setPopupData(this.signupForm.value)
      this.userData.addUser(this.signupForm.value)
      this.openPopUp()
      this.signupForm.reset()
    }

  }



}
