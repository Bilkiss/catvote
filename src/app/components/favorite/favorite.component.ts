import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {

  votesArray: any = [];

  constructor() { }

  ngOnInit() {
    this.votesArray = localStorage.getItem("votesArray");
    this.votesArray = (this.votesArray) ? JSON.parse(this.votesArray) : [];
    console.log("votesArray click vote: ", this.votesArray);
  }

}
