import { Component, Inject, Output } from '@angular/core';
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef
} from '@angular/material/dialog';

import { PopupserviceService } from '../popupservice.service';
import {CommonModule, NgFor } from '@angular/common';
import { CustomepipePipe } from '../customepipe.pipe';

@Component({
  selector: 'app-signuppopup',
  standalone: true,
  imports: [MatDialogModule,NgFor,CustomepipePipe,CommonModule],
  templateUrl: './signuppopup.component.html',
  styleUrl: './signuppopup.component.css',

})
export class SignuppopupComponent {

  constructor(@Inject(MatDialogRef) private dialogRef: MatDialogRef<SignuppopupComponent>, private popup: PopupserviceService) { }
  signupData: any

  firstname :any;
  signupKeysArray: any[] =[]
  popupHeading :any = this.popup.getPopupHeading()

  ngOnInit() {
    this.signupData = this.popup.getPopupData()
    const {firstname,lastname,email,password,gender,dob} = this.signupData
    this.firstname = firstname

    for (let key in  this.signupData){
     const  str =  key.charAt(0).toUpperCase() + key.slice(1); //convert first letter to upper case 
     this.signupKeysArray?.push(key)
    }
    console.log(this.signupKeysArray)
  }

  onClickConfirmSubmit(){
    this.popup.onConfirmSubmit()
  }
 
  closePopup() {
    console.log(this.signupData, 'popup closed')
    this.dialogRef.close()
  }
}
