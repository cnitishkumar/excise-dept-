import { Component } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTreeModule} from '@angular/material/tree';
import { MatButtonModule } from '@angular/material/button';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';




@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule,MatExpansionModule,MatTreeModule,MatButtonModule, MatSlideToggleModule,MatIconModule,RouterLink ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent  {

  isLogedIn :any = false
  onCLickBtn(){
    this.isLogedIn = !this.isLogedIn
  }



 constructor(){
 }
}
