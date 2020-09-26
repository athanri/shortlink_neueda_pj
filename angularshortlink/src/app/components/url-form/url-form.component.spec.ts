import { ComponentFixture, inject, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UrlService } from '../../services/url.service'

import { UrlFormComponent } from './url-form.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('UrlService', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [UrlService]
  }));

   it('should be created', () => {
    const service: UrlService = TestBed.inject(UrlService);
    expect(service).toBeTruthy();
   });

   it('should have addUrls function', () => {
    const service: UrlService = TestBed.inject(UrlService);
    expect(service.addUrl).toBeTruthy();
   });

});


describe('UrlFormComponent', () => {
  let component: UrlFormComponent;
  let fixture: ComponentFixture<UrlFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrlFormComponent ],
      imports: [HttpClientTestingModule, ReactiveFormsModule],
      providers: [UrlService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  

  it(`should be create`, () => {
      expect(component).toBeTruthy();
  });

  // check if onSubmit function is available
  it('should have onSubmit function', () => {
    expect(component.onSubmit).toBeTruthy();
   });

  // check if sendPostRequest function is available
   it('should have sendPostRequest function', () => {
    expect(component.sendPostRequest).toBeTruthy();
   });
});
