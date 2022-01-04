import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-mini-user-card',
  templateUrl: './mini-user-card.component.html',
  styleUrls: ['./mini-user-card.component.scss']
})
export class MiniUserCardComponent implements OnInit {
@Input() user: any

  constructor() { }

  ngOnInit(): void {
  }

}
