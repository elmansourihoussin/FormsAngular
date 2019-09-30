import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Html5ValiditionComponent } from './html5-validition.component';

describe('Html5ValiditionComponent', () => {
  let component: Html5ValiditionComponent;
  let fixture: ComponentFixture<Html5ValiditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Html5ValiditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Html5ValiditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
