import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { EndpointService } from './services/endpoint.service';
import { ListCatComponent } from './components/list-cat/list-cat.component';
import { VoteComponent } from './components/vote/vote.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { MenuComponent } from './components/shared/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCatComponent,
    VoteComponent,
    FavoriteComponent,
    MenuComponent
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
