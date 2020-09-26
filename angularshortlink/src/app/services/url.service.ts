import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Observable } from 'rxjs';
import { of } from "rxjs";

import { Url } from "../models/url";


@Injectable({
  providedIn: 'root'
})
export class UrlService {
  urls: Url[];

  private urlSource = new BehaviorSubject<Url>({id: null, text: null, date: null, longLinkDesc: null});

  // selectedUrl = this.urlSource.asObservable();

  private stateSource = new BehaviorSubject<boolean>(true);
  stateClear = this.stateSource.asObservable(); 

  constructor() { 
    // this.urls = [
    //   // {id: '1', text: 'galwaystaging', date: new Date('12/09/2020 12:34:22')},
    //   // {id: '2', text: 'tribes', date: new Date('10/09/2020 07:34:53')},
    //   // {id: '3', text: '4allour', date: new Date('08/09/2020 09:56:22')}
    // ];

    this.urls = [];
  }
  //if urls exist in localStorage retrieve them and sort by date otherwise set blank urls array
  getUrls() : Observable<Url[]>{

    if(localStorage.getItem('urls') === null) {
      this.urls = [];
    } else {
      this.urls = JSON.parse(localStorage.getItem('urls'));
    }
    return of(this.urls.sort((a, b) => {
      return b.date - a.date;
    }));
  }

  setFormUrl(url: Url) {
    this.urlSource.next(url);
  }
  //add url to localStorage and urls array
  addUrl(url: Url) {
    this.urls.unshift(url);
    //Add to local storage
    localStorage.setItem('urls', JSON.stringify(this.urls));
  }

  // delete from array and localStorage
  deleteUrl(url: Url) {
    this.urls.forEach((cur, index) => {
      if(url.id === cur.id) {
        this.urls.splice(index, 1);
      }
    })

    //delete localStorage
    localStorage.setItem('urls', JSON.stringify(this.urls));

  }

  clearState() {
    this.stateSource.next(true);
  }
}
