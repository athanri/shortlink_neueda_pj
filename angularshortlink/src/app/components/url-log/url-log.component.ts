import { Component, OnInit } from '@angular/core';

import { UrlService } from "../../services/url.service";

import { Url } from "../../models/url";


@Component({
  selector: 'app-url-log',
  templateUrl: './url-log.component.html',
  styleUrls: ['./url-log.component.css']
})
export class UrlLogComponent implements OnInit {
  urls: Url[];
  selectedUrl: Url;
  loaded: boolean = false;
  isCollapsed = true;

  constructor(private urlService: UrlService) { }
  //on creation of the component
  ngOnInit(): void {
    this.urlService.stateClear.subscribe(clear => {
      if(clear) {
        this.selectedUrl = {id: '', text: '', date: '', longLinkDesc: ''}
      }
    });
    //load urls if they exist
    this.urlService.getUrls().subscribe(urls => {
      this.urls = urls;
      this.loaded = true;
    });
  }
  //select individual record(url)
  onSelect(url: Url) {
    this.urlService.setFormUrl(url);   
    this.selectedUrl = url; 
  }

  //delete url from localStorage when button pressed
  onDelete(url: Url){
    if(confirm('Do you want to delete?')) {
      this.urlService.deleteUrl(url);
    }
  }

}
