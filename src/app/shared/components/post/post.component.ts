import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PostComponent implements OnInit {
  dropdownIsToggled= false
  @Input() post: any
  constructor() {
  }

  ngOnInit(): void {
  }



  toggleDropdown() {
    this.dropdownIsToggled= !this.dropdownIsToggled
  }


}

