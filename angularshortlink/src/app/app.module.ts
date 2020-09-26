import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UrlFormComponent } from './components/url-form/url-form.component';
import { UrlLogComponent } from './components/url-log/url-log.component';

import { UrlService } from "./services/url.service";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UrlFormComponent,
    UrlLogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [UrlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
