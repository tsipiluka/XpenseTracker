import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-card',
  templateUrl: './progress-card.component.html',
  styleUrls: ['./progress-card.component.css']
})
export class ProgressCardComponent implements OnInit {

  @Input()
  progressCards: any[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
