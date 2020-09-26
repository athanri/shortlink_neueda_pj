import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlLogComponent } from './url-log.component';

describe('UrlLogComponent', () => {
  let component: UrlLogComponent;
  let fixture: ComponentFixture<UrlLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrlLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
