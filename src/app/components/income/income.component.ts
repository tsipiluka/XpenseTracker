import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css', '../../general-css/app.media.css',]
})
export class IncomeComponent implements OnInit {

  stretchCards: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.stretchCards = [
      {
        title: 'Cigarettes',
        class: 'item online',
        icon: 'shopping_cart',
        reason: '08.08.2022',
        amount: '500'
      },  
      {
        title: 'Cigarettes',
        class: 'item online',
        icon: 'shopping_cart',
        reason: '08.08.2022',
        amount: '600'
      }, 
        {
        title: 'Cigarettes',
        class: 'item online',
        icon: 'shopping_cart',
        reason: '08.08.2022',
        amount: '14'
      },
         {
        title: 'Cigarettes',
        class: 'item offline',
        icon: 'shopping_cart',
        reason: '08.08.2022',
        amount: '14'
      },
      {
        title: 'Cigarettes',
        class: 'item offline',
        icon: 'shopping_cart',
        reason: '08.08.2022',
        amount: '14'
      },
      {
        title: 'Cigarettes',
        class: 'item offline',
        icon: 'shopping_cart',
        reason: '08.08.2022',
        amount: '14'
      },
      
      
    ]
  }

}
