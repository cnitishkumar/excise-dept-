import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  isLogedin: any = false

  setLoginStatus(status: any) {
    return this.isLogedin = status
  }


  getLoginStatus() {
    return this.isLogedin
  }


  userDetails: any = {
    email: 'nitish@gmail.com',
    password: 'q1234'
  }

  userDataArray: any[] = [{
    email: 'cnk@gmail.com',
    password: 'q123'
  }, {
    email: 'nitish@gmail.com',
    password: 'q1234'
  }]


  addUser(data: any) {
    const newUser = {
      ...data
    }
    this.userDataArray.push(newUser)
  }


  validateUser(email: any, password: any) {
    console.log(this.userDataArray)
    console.log(email)
    const loginUser: any = this.userDataArray.filter(each => (each.email === email))[0]
    console.log('is Valid',loginUser,)
    if (loginUser) {
      return loginUser.email === email && loginUser.password === password
    } else {
      this.setLoginStatus(false)
      return false
    }
  }

  constructor() { }
}
