import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css', '../general-css/app.media.css']
})
export class DashboardComponent implements OnInit {


  constructor() {

  }

  ngOnInit(): void {  }

  myhref(url: string): void {
    const test = "localhost:4200" + url;
    window.location.href = "http://localhost:4200" + url;

    console.log(test);
  }

}
