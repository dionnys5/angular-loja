import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  @Input()
  cliente = null;

  semCliente = null;

  constructor() { }

  ngOnInit() {
    if(!this.cliente) {
      this.semCliente = true;
    }
  }

}
