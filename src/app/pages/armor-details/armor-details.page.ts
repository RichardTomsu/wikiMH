import { Component, OnInit } from '@angular/core';
import { PlacesService } from 'src/app/services/places/places.service';

@Component({
  selector: 'app-armor-details',
  templateUrl: './armor-details.page.html',
  styleUrls: ['./armor-details.page.scss'],
})
export class ArmorDetailsPage implements OnInit {
  Data: any;
  constructor(private placeService: PlacesService) { }

  ngOnInit() {
    this.Data = this.placeService.data;
    console.log(this.Data);
  }

}
