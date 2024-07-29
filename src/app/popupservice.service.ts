import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Provide a single instance throughout the application
})
export class PopupserviceService {
  private signupData: any ={ }; // Initialize with null to avoid undefined behavior
  popupHeading: any = 'h'
  setPopupData(data: any) {
    this.signupData = data;
    console.log(this.signupData, 'Popup data set');
    return this.signupData;
  }

  setPopupHeading(popupHeading :any){
 this.popupHeading =popupHeading
  }
  getPopupHeading(){
    console.log(this.popupHeading,'Pop HEading')
   return this.popupHeading 
  }

onConfirmSubmit(){
  console.log('SUbmit Confirmed')
}
     


  getPopupData() {
    console.log(this.signupData,'Popup data get');

    return this.signupData || {}; // Ensure a non-null value is returned
  }

  constructor() { }
}
