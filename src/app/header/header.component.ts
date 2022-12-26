import { Component } from '@angular/core';
import {
  faGithub,
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

import {
  faCartShopping,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { CarrinhoService } from '../carrinho.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  constructor(public carrinhoService: CarrinhoService){}

  faGithub = faGithub;
  faTwitter = faTwitter;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faCartShopping = faCartShopping;
  faLinkedinIn = faLinkedinIn;



}
