import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ListCatComponent } from './components/list-cat/list-cat.component';
import { VoteComponent } from './components/vote/vote.component';
import { FavoriteComponent } from './components/favorite/favorite.component';

const routes: Routes = [
  { path: 'vote', component: VoteComponent },
  { path: 'cat-list', component: ListCatComponent },
  { path: 'favorites', component: FavoriteComponent },
  { path: '**', component: VoteComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})



export class AppRoutingModule { }
