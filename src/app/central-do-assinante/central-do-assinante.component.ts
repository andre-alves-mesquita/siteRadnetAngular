import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
} from '@angular/animations';

@Component({
  selector: 'app-central-do-assinante',
  templateUrl: './central-do-assinante.component.html',
  styleUrls: ['./central-do-assinante.component.css'],
  animations: [
    trigger('btnState', [
      state('inactive', style({})),
      state(
        'active',
        style({
          color:'white',
          backgroundColor: '#ff8b3e',
          transform: 'scale(1.2)',
          boxShadow:
            '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        })
      ),
      transition('inactive=>active', animate('100ms ease-in')),
      transition('active=>inactive', animate('100ms ease-out')),
    ]),
  ],
})
export class CentralDoAssinanteComponent implements OnInit {
  constructor() {}

  myState: any = 'inactive';
  ngOnInit(): void {}

  toggleState() {
    this.myState = this.myState === 'active' ? 'inactive' : 'active';
  }
}
