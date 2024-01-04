import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlacesService } from 'src/app/services/places/places.service';


@Component({
  selector: 'app-armor-sets',
  templateUrl: './armor-sets.page.html',
  styleUrls: ['./armor-sets.page.scss'],
})
export class ArmorSetsPage implements OnInit {
  DataArray: any;
  filteredDataArray: any;
  searchTerm: string = '';
  constructor(public http: HttpClient, public placeService: PlacesService) { 
  }

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
