import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { EndpointService } from './services/endpoint.service';
import { ListCatComponent } from './components/list-cat/list-cat.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EndpointService],
  bootstrap: [AppComponent]
})
export class AppModule { }
