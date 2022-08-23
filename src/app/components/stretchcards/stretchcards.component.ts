import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stretchcards',
  templateUrl: './stretchcards.component.html',
  styleUrls: ['./stretchcards.component.css']
})
export class StretchcardsComponent implements OnInit {
@Input()
stretchCards: any;


  constructor() { }

  ngOnInit(): void {
  }

}
