import { Component, OnInit } from '@angular/core';
import { PlacesService } from 'src/app/services/places/places.service';

@Component({
  selector: 'app-weapon-details',
  templateUrl: './weapon-details.page.html',
  styleUrls: ['./weapon-details.page.scss'],
})
export class WeaponDetailsPage implements OnInit {
  Data: any;
  constructor(private placeService: PlacesService) { }

  ngOnInit() {
    this.Data = this.placeService.data;
    console.log(this.Data);
  }

}
