import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import{AuthGuardService} from './auth-guard.service'
import { NewlicenseComponent } from './newlicense/newlicense.component';


export const routes: Routes = [{
    path : 'signup', title :'Signup',component : SignupComponent
},
{
    path : 'login', title :'Login',component : LoginComponent ,pathMatch :'full'
},
{
    path : '', title :'',component : HomeComponent ,pathMatch :'full', canActivate :[AuthGuardService]
},
{
    path : 'newLicense', title :'NewLicense',component :NewlicenseComponent ,pathMatch :'full',
}

];
