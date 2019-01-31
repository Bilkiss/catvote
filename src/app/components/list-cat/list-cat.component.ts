import { Component, OnInit } from '@angular/core';

import { EndpointService } from '../../services/endpoint.service';

@Component({
  selector: 'app-list-cat',
  templateUrl: './list-cat.component.html',
  styleUrls: ['./list-cat.component.scss']
})
export class ListCatComponent implements OnInit {

  catListObj:any;
  catList:any;

  constructor(private endpointService: EndpointService) { }

  ngOnInit() {
    this.getListCat();
  }

  getListCat(){
    this.endpointService.getCats().subscribe( res => {
      this.catListObj = res;
      this.catList = this.catListObj.images;
      // console.log("catList: ", this.catList);
      if(this.catList.length >0){
        this.sortCatByScore();
      }

    }, error => {
      console.log("Error: ", error);
    })
  }

  sortCatByScore(){
    this.catList.sort((a,b) => (a.score > b.score) ? -1 : ((b.score > a.score) ? 1 : 0));
  }

}
