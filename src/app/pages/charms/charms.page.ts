import { Component, OnInit } from '@angular/core';
import { PlacesService } from 'src/app/services/places/places.service';

@Component({
  selector: 'app-charms',
  templateUrl: './charms.page.html',
  styleUrls: ['./charms.page.scss'],
})
export class CharmsPage implements OnInit {
  DataArray: any;
  filteredDataArray: any;
  searchTerm: string = '';
  constructor(public placeService: PlacesService) { }

  ngOnInit() {
    this.DataArray = this.placeService.data;
    this.filteredDataArray = this.DataArray;
  }
  sendData(data: any) {
    this.placeService.data = data;
  }
  filterData() {
    this.filteredDataArray = 
    this.DataArray.filter((data: { name: string; }) => data.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
