import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uppercase',
  templateUrl: './uppercase.component.html',
  styleUrls: ['./uppercase.component.css']
})
export class UppercaseComponent implements OnInit {
str: string;
  constructor() { }
  btnUpcase(text) {
  this.str = text.toUpperCase( );
}
  ngOnInit() {
  }

}
