import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { getLocaleDateFormat } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  desc: string;
  temps: string;
  datas = [];

  constructor(private apiService: ApiService) { }

btnsubmit(ct) {
  console.log(ct);

  this.apiService.getWeather(ct).subscribe(res => {
    console.log(res.json().main.temp);
    this.desc = res.json().weather[0].description;
    this.temps = res.json().main.temp;
  });
}


ngOnInit() {
}

}
