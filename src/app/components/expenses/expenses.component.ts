import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css', '../../general-css/app.media.css',]
})
export class ExpensesComponent implements OnInit {

  stretchCards: any[] = [];

  constructor(
    
  ) { }

  ngOnInit(): void {
    this.stretchCards = [
      {
        title: 'Cigarettes',
        class: 'item online',
        icon: 'shopping_cart',
        smallText: '08.08.2022',
        reason: 'PERSONAL',
        amount: '-14'
      },
      {
        title: 'Cigarettes',
        class: 'item offline',
        icon: 'shopping_cart',
        smallText: '08.08.2022',
        reason: 'PERSONAL',
        amount: '-14'
      },
      {
        title: 'Cigarettes',
        class: 'item online',
        icon: 'shopping_cart',
        smallText: '08.08.2022',
        reason: 'PERSONAL',
        amount: '-14'
      },
      {
        title: 'Cigarettes',
        class: 'item offline',
        icon: 'shopping_cart',
        smallText: '08.08.2022',
        reason: 'PERSONAL',
        amount: '-14'
      },
      {
        title: 'Cigarettes',
        class: 'item online',
        icon: 'shopping_cart',
        smallText: '08.08.2022',
        reason: 'PERSONAL',
        amount: '-14'
      },
      
    ]
  }

}
