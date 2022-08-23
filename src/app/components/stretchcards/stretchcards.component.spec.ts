import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StretchcardsComponent } from './stretchcards.component';

describe('StretchcardsComponent', () => {
  let component: StretchcardsComponent;
  let fixture: ComponentFixture<StretchcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StretchcardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StretchcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
