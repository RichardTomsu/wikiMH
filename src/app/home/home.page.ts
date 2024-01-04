import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { WeatherModalComponent } from './weather-modal/weather-modal.component';
import { HttpClient } from '@angular/common/http';
import { PlacesService } from '../services/places/places.service';
import { ThemeService } from '../theme.service';
import { Preferences } from '@capacitor/preferences';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  MonstersDataArray: any;
  ArmorDataArray: any;
  CharmDataArray: any;
  DecoDataArray: any;
  WeaponDataArray: any;
  darkMode: boolean = false;
  loading: boolean = true;

  constructor(public modalCtrl: ModalController, 
    public http: HttpClient, 
    private placesService: PlacesService,
    private themeService: ThemeService) {
    }
    ngOnInit(){
      this.loadData();

      
    }
  

  sendData(data: any) {
    this.placesService.data = data;
  }

  async loadData() {
    const url = `https://mhw-db.com/monsters`;
    this.http.get(url)
    .subscribe(data =>{
      console.log(data);
      this.MonstersDataArray = data;
    });
    
    const url2 = `https://mhw-db.com/armor/sets`;
    this.http.get(url2)
    .subscribe(data =>{
      console.log(data);
      this.ArmorDataArray = data;
    });
    
    const url3 = `https://mhw-db.com/charms`;
    this.http.get(url3)
    .subscribe(data =>{
      console.log(data);
      this.CharmDataArray = data;
    });
    
    const url4 = `https://mhw-db.com/decorations`;
    this.http.get(url4)
    .subscribe(data =>{
      console.log(data);
      this.DecoDataArray = data;
    });
    
    const url5 = `https://mhw-db.com/weapons`;
    this.http.get(url5)
    .subscribe(data =>{
      console.log(data);
      this.WeaponDataArray = data;
      this.loading = false;
    });
  }

  toggleDarkMode(){
    this.themeService.setDarkMode(this.darkMode);
  }

}
