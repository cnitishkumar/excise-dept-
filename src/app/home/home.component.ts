import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { HomemidComponent } from './homemid/homemid.component';
import { HometopComponent } from './hometop/hometop.component';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,HomemidComponent,HometopComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
