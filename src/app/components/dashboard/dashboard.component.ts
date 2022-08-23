import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css', '../../general-css/app.media.css']
})
export class DashboardComponent implements OnInit {
  progressCards: any[] = []

  constructor() {

  }

  ngOnInit(): void { 
    this.progressCards = [
      {
        title: 'Food',
        class: 'item offline',
        icon: 'shopping_cart',
        limit: '400',
        currentAmount: '40',
        amount: '-14',
        progressBarClass: 'orange'
      },
      {
        title: 'CLOTHES',
        class: 'item online',
        icon: 'shopping_cart',
        limit: '200',
        currentAmount: '180',
        amount: '-14',
        progressBarClass: 'orange'
      },
      {
        title: 'MEMBERSHIPS',
        class: 'item online',
        icon: 'shopping_cart',
        limit: '100',
        currentAmount: '60',
        amount: '-14',
        progressBarClass: 'orange'
      },
    ]
   }

  myhref(url: string): void {
    const test = "localhost:4200" + url;
    window.location.href = "http://localhost:4200" + url;

    console.log(test);
  }

}
