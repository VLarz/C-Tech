import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css/dist/js/materialize';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav, null);

    const nav = document.getElementById('nav');
    const letter = document.getElementsByClassName('nav-letter');

    const navTransition = () => {
      if (window.scrollY <= 130) {
        nav.classList.add('transparent');
        nav.classList.add('z-depth-0');
        nav.classList.remove('crimson-blue');
        for(var i = 0; i < letter.length; i++)
        {
            letter[i].classList.remove('nav-color-white');
            letter[i].classList.add('nav-color-black');
        }
      } 
      else {
        nav.classList.add('crimson-blue');
        nav.classList.remove('transparent');
        nav.classList.remove('z-depth-0');
        for(var i = 0; i < letter.length; i++)
        {
            letter[i].classList.add('nav-color-white');
            letter[i].classList.remove('nav-color-black');
        }
      }
    };

    window.addEventListener('scroll', navTransition);
  }

}
