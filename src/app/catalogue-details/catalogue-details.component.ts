import { Component, OnInit } from '@angular/core';
import { Http  } from '@angular/http';
import { ApiService } from '../services/api.service';
import { Route, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-catalogue-details',
  templateUrl: './catalogue-details.component.html',
  styleUrls: ['./catalogue-details.component.css']
})
export class CatalogueDetailsComponent implements OnInit {
datas = [];
i1:number;
i2:number;
  constructor(private apiService: ApiService, private router: ActivatedRoute) {
    router.params.subscribe(params => {
      console.log(params);
      this.i1= params.i1;
      this.i2= params.i2;
    })
   }

  ngOnInit() {
    this.apiService.getData().subscribe(res => {
      //console.log(this.i1);
      //console.log(res.json().data[this.i1].Services[this.i2]);
      this.datas= res.json().data[this.i1].Services[this.i2];
      console.log(this.datas)
    });
  }

}
