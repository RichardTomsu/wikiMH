import { Component, OnInit } from '@angular/core';
import { PlacesService } from 'src/app/services/places/places.service';


@Component({
  selector: 'app-monster-details',
  templateUrl: './monster-details.page.html',
  styleUrls: ['./monster-details.page.scss'],
})
export class MonsterDetailsPage implements OnInit {
  Data: any;
  constructor(public placeService: PlacesService) { 
  }

  ngOnInit() {
    this.Data = this.placeService.data;
    console.log(this.Data);
  }

}
