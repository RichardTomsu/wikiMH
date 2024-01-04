import { Component, OnInit } from '@angular/core';
import { PlacesService } from 'src/app/services/places/places.service';

@Component({
  selector: 'app-charm-details',
  templateUrl: './charm-details.page.html',
  styleUrls: ['./charm-details.page.scss'],
})
export class CharmDetailsPage implements OnInit {
  Data: any;
  constructor(private placeService: PlacesService) { }

  ngOnInit() {
    this.Data = this.placeService.data;
    console.log(this.Data);
  }

}
