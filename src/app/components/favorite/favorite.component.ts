import { Component, OnInit } from '@angular/core';
import { IMasonryGalleryImage } from 'ngx-masonry-gallery';

import { EndpointService } from '../../services/endpoint.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {

  votesArray: any = [];
  catVotedList: any = [];
  catListObj:any;
  catList:any;

  constructor(private endpointService: EndpointService) { }

  ngOnInit() {
    this.votesArray = localStorage.getItem("votesArray");
    this.votesArray = (this.votesArray) ? JSON.parse(this.votesArray) : [];
    console.log("votesArray click vote: ", this.votesArray);

    this.getListCat();
  }

  getListCat(){
    this.endpointService.getCats().subscribe( res => {
      this.catListObj = res;
      this.catList = this.catListObj.images;
      console.log("catList: ", this.catList);

      this.catVotedList = this.catList.filter( x => this.votesArray.includes(x.id));

      console.log("catVotedList: ", this.catVotedList);


    }, error => {
      console.log("Error: ", error);
    })
  }
  public get cats(): IMasonryGalleryImage[] {
    this.getListCat();
    return this.catVotedList.map(m => <IMasonryGalleryImage>{
      imageUrl: m.url,
      alt: m.id
    });
  }

}
