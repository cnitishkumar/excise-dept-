import { Injectable, Input } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserdataService } from './userdata.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  constructor(private router: Router,private userData : UserdataService) { } // Assuming you have an injected Router

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      
    console.log(this.userData.getLoginStatus(),'auth service')

    if (this.userData.getLoginStatus()
    ) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
