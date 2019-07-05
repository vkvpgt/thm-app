import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  data: Observable<any>;

  constructor(public httpClient: HttpClient) {

  }
  ngOnInit() {
    setInterval(() => {
      this.getWeatherData();
  }, 10000);
  }
  getWeatherData() {
    this.data = this.httpClient.get('http://10.1.25.131/getdata');
    this.data
      .subscribe(data => {
        console.log('my data: ', data);
        this.data = data;
      });
  }
}
