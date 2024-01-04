import { Component, OnInit } from '@angular/core';
import { PlacesService } from 'src/app/services/places/places.service';

@Component({
  selector: 'app-deco-details',
  templateUrl: './deco-details.page.html',
  styleUrls: ['./deco-details.page.scss'],
})
export class DecoDetailsPage implements OnInit {
  Data: any;
  constructor(private placeService: PlacesService) { }

  ngOnInit() {
    this.Data = this.placeService.data;
    console.log(this.Data);
  }

}
