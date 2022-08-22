import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.css']
})
export class InsightsComponent implements OnInit {

  cards: any[] = [];

  constructor() {
    this.cards = [
      {
        title: "Total Income",
        icon: "analytics",
        value: "2.676",
        class: "sales",
        link: "income"
      },

      {
        title: "Total Expenses",
        icon: "bar_chart",
        value: "276",
        class: "expenses",
        link: "dashboard"
      },

      {
        title: "Balance",
        icon: "stacked_line_chart",
        value: "51.098",
        class: "income",
        link: "dashboard"
      }
    ]
   }

  ngOnInit(): void {
  }

}
