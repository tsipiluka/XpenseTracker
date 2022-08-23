import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css', '../../general-css/app.media.css',]
})
export class CategoriesComponent implements OnInit {

  progressCards : any[] = []
  constructor() { }

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

}
