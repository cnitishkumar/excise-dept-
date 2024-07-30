import { CommonModule, NgClass, NgStyle, } from '@angular/common';
import { Component ,ChangeDetectionStrategy} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { RouterLink } from '@angular/router';
import { PopupserviceService } from '../popupservice.service';
import { SignuppopupComponent } from '../signuppopup/signuppopup.component';
import { FooterComponent } from '../footer/footer.component';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';



@Component({
  selector: 'app-newlicense',
  standalone: true,
  imports: [RouterLink, FormsModule, ReactiveFormsModule, NgClass, NgStyle, CommonModule ,FooterComponent,MatFormFieldModule,MatInputModule,MatSelectModule,MatDatepickerModule,],
  templateUrl: './newlicense.component.html',
  providers: [provideNativeDateAdapter()],
  styleUrl: './newlicense.component.css'
})
export class NewlicenseComponent {

constructor(private dialogRef : MatDialog , private popup:PopupserviceService,){}



  shopNameFocus: any = false
  shopDistFocus: any = false
  selectShopFocus: any = false
  shopAddressFocus: any = false
  personNameFocus: any = false
  fatherNameFocus: any = false
  dobFocus: any = false
  qualificationFocus: any = false
  occupationFocus: any = false
  incomeFocus: any = false
  experienceFocus: any = false
  emailFocus: any = false
  contactFocus: any = false
  cityFocus: any = false
  distFocus: any = false
  postelCodeFocus: any = false
  addressFocus: any = false
  formValue: any;
  isFormSubmitted: any = false


  shopNamePlaceHolder: any = 'Shop Name'


  onFocusShopName() {
    this.shopNameFocus = true
    this.shopNamePlaceHolder = ''
  }

  onBlurShopName() {
    this.shopNameFocus = false
    this.shopNamePlaceHolder = 'Shop Name'
  }

  onShopDistFocus() {
    this.shopDistFocus = true
  }

  onShopDistBlur() {
    this.shopDistFocus = false

  }

  onFocusChangeShop() {
    this.selectShopFocus = true
  }

  onBlurChangeShop() {
    this.selectShopFocus = false
  }
  onFocusShopAddress() {
    this.shopAddressFocus = true;
  }
  onBlurShopAddress() {
    this.shopAddressFocus = false;
  }


  onOptionChangeShopType(value: any) {
    console.log(value)
  }

  onFocusPersonName() {
    this.personNameFocus = true
  }

  onBlurPersonName() {
    this.personNameFocus = false
  }

  onFocusFatherName() {
    this.fatherNameFocus = true

  }
  onBlurFatherName() {
    this.fatherNameFocus = false
  }

  onFocusDob() {
    this.dobFocus = true

  }
  onBlurDob() {
    this.dobFocus = false

  }

  onFocusQualification() {
    this.qualificationFocus = true
  }
  onBlurQualification() {
    this.qualificationFocus = false
  }
  onFocusOccupation() {
    this.occupationFocus = true
  }
  onBlurOccupation() {
    this.occupationFocus = false
  }

  onFocusIncome() {
    this.incomeFocus = true

  }
  onBlurIncome() {
    this.incomeFocus = false
  }

  onFocusExperience() {
    this.experienceFocus = true
  }
  onBlurExperience() {
    this.experienceFocus = false
  }

  onFocusEmail() {
    this.emailFocus = true
  }
  onBlurEmail() {
    this.emailFocus = false
  }

  onFocusContact() {
    this.contactFocus = true
  }
  onBlurContact() {
    this.contactFocus = false
  }
  onFocusCity() {
    this.cityFocus = true
  }
  onBlurCity() {
    this.cityFocus = false
  }

  onFocusPostelCode() {
    this.postelCodeFocus = true
  }
  onBlurPostelCode() {
    this.postelCodeFocus = false
  }

  onFocusDist() {
    this.distFocus = true
  }

  onBlurDist() {
    this.distFocus = false
  }

  onFocusAddress() {
    this.addressFocus = true
  }
  onBlurAddress() {
    this.addressFocus = false
  }


  emailFormat: any = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;


  newLicenseForm: FormGroup = new FormGroup({
    shopName: new FormControl('XYZ', [Validators.required]),
    shopType: new FormControl('', [Validators.required]),
    shopDistrict: new FormControl('', Validators.required),
    shopAddress: new FormControl('5-80/1,HYD', [Validators.required]),
    personName: new FormControl('CNK', [Validators.required,Validators.pattern('^[a-zA-Z]+$')]),
    fatherName: new FormControl('CS', [Validators.required,Validators.pattern('^[a-zA-Z]+$')]),
    dob: new FormControl('', Validators.required),
    qualification: new FormControl('B.tech', [Validators.required]),
    occupation: new FormControl('SE', [Validators.required]),
    income: new FormControl('1000000', [Validators.required]),
    experience: new FormControl('1', [Validators.required]),
    email: new FormControl('nitish@gmail.com', [Validators.required,Validators.pattern(this.emailFormat)]),
    contact: new FormControl(9876543219, [Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('^[0-9]{10}$')]),
    city: new FormControl('HYD', [Validators.required]),
    address: new FormControl('HYD', [Validators.required]),
    postelCode: new FormControl(509336, [Validators.required,Validators.minLength(6),Validators.maxLength(6), Validators.pattern('^[1-9]{1}[0-9]{5}$')]),
    district: new FormControl('', [Validators.required])
  })


  onChangeDist(e: any) {

  }



 message :any ='';
 submitSuccess :any = false

  onSubmit() {
   
    console.log('SUBMIT TRIGGERED')
    this.isFormSubmitted = true
    this.newLicenseForm.markAllAsTouched()
    this.formValue = this.newLicenseForm.value
    console.log(this.newLicenseForm.valid)

   if(this.newLicenseForm.valid){
    this.popup.setPopupHeading('new license')
    this.popup.setPopupData(this.newLicenseForm.value)
    this.dialogRef.open(SignuppopupComponent)
      //  this.newLicenseForm.reset();
       this.submitSuccess = true
       this.isFormSubmitted = true
   }else{
    this.message = 'Fill all the required fields ...'
   }
  }

}
