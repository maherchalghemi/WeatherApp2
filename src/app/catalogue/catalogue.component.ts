import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {
  datas = [];
  desc;
  constructor(private apiService: ApiService) { }

  getData() {
    this.apiService.getData().subscribe(res => {
      console.log(res.json().data);
      this.datas = res.json().data;
    });
  }

  ngOnInit() {

    this.getData();
  }
  openModal(desc) {
     this.desc = desc;
  }
}
