import { Component, OnInit } from '@angular/core';

import {EndpointService } from '../../services/endpoint.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent implements OnInit {

  catListObj:any;
  catList:any = [];
  currentVote = 0;
  currentDisplayCat1 = 0;
  currentDisplayCat2 = 1;

  constructor(private endpointService: EndpointService) { }

  ngOnInit() {

    this.getListCat();
  }

  getListCat(){
    this.endpointService.getCats().subscribe( res => {
      this.catListObj = res;
      this.catList = this.catListObj.images;
      // console.log("catList: ", this.catList);

    }, error => {
      console.log("Error: ", error);
    })
  }

  clickVote(ID){
    // console.log("Clickvote id: ", ID);

    this.endpointService.voteCat(ID).subscribe( res => {
      console.log("Res cat vote ", res);
    }, error =>{
      console.log("Error cat vote ", error);
    });

    this.currentVote += 1;
    this.currentDisplayCat1 = this.currentVote * 2;
    this.currentDisplayCat2 = this.currentDisplayCat1 + 1;

  }

}
