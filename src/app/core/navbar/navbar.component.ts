import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {AuthGuard} from "../guards/auth/auth.guard";
import {AuthService} from "../Auth/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  dropdownIsToggled= false
  menuIsToggled= false
  isLogged= this.authGuard.canActivate();
  profilePic: string | null | undefined;
  fullName= localStorage.getItem('fullName');
  id= localStorage.getItem('id');

  @ViewChild('navDropdownButton') navDropdownButton! : ElementRef
  @ViewChild('navDropdown') navDropdown!:ElementRef


  constructor(
    private authService: AuthService,
    private authGuard:AuthGuard,
    private renderer: Renderer2,
  ) {

    /*this.renderer.listen('window', 'click',(e:Event)=>{
      /**
       * Only run when toggleButton is not clicked
       * If we don't check this, all clicks (even on the toggle button) gets into this
       * section which in the result we might never see the menu open!
       * And the menu itself is checked here, and it's where we check just outside of
       * the menu and button the condition abbove must close the menu
       */
    /*  if(e.target !== this.navDropdownButton.nativeElement && e.target!==this.navDropdown.nativeElement){
        this.dropdownIsToggled=false;
        console.log("hello")
      }
    });*/

  }

  ngOnInit(): void {
  if(localStorage.getItem('profilePic'))
    this.profilePic= localStorage.getItem('profilePic')
  }


  toggleDropdown() {
    this.dropdownIsToggled= !this.dropdownIsToggled
  }

  toggleMenu() {
    this.menuIsToggled= !this.menuIsToggled
  }

  logOut() {
    this.authService.logOut()
  }
}
