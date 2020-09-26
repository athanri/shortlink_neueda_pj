import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UrlService } from "../../services/url.service";

import { FormBuilder, FormGroup, Validators} from '@angular/forms';
//^^Import statements for component dependancies

@Component({
  selector: 'app-url-form',
  templateUrl: './url-form.component.html',
  styleUrls: ['./url-form.component.css']
})
export class UrlFormComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  // id: string;
  // text: string;
  // date: any;
  // longLinkDesc: string;

  serverError: boolean = false;
  errorMsg:string;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private urlService: UrlService) {
      //basic url check
      const reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
      this.form = fb.group({
        //checks url is valid pattern and enables Add Url button if so
        url: ['', [Validators.required, Validators.pattern(reg)]]
      })
    }

  ngOnInit(): void {

  }

  get f(){
    return this.form.controls;
  }

  onSubmit() {
    // on submission of the form initialise a 'newUrl' object
      const newUrl = {
        id:'',
        text:'',
        date:'',
        longLinkDesc:''
      }
      //subscribe to the observable and if server responds assign values as per below. otherwise if there are errors display to user.
      this.sendPostRequest().subscribe(
        res => {
          newUrl.id = res._id;
          newUrl.text = res.shortUrl;
          newUrl.date = res.date;
          newUrl.longLinkDesc = res.longUrl;
        //add url to view and save to localStorage using the service 
        this.urlService.addUrl(newUrl);
        }, (error) => {
          if (error.statusText === "Unauthorized") {
            this.serverError = true;
            //the server will check if Url is a valid url and if not will return this message
            this.errorMsg = `${error.error} - Please enter a valid working link`;
          } else {
            this.serverError = true;
            this.errorMsg = `${error.statusText} - Server Error Please Try Again Later`;
          }
        }
      );
      
    //clear state
    this.clearState();
  }

  // send post request to the serer with an object as the param
  sendPostRequest(): Observable<any> {
    return this.http.post<any>('http://localhost:5000/api/url/shorten', {longUrl: this.form.get('url').value});
  }
  
  //This function clears the input box
  clearState() {
    // this.id = '';
    // this.text = '';
    this.form.reset(); //get the for named url and empty
    this.serverError = false;
    // this.date = '';
    // this.urlService.clearState;
  }

}
