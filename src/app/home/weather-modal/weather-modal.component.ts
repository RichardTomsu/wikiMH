import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-weather-modal',
  templateUrl: './weather-modal.component.html',
  styleUrls: ['./weather-modal.component.scss'],
})
export class WeatherModalComponent{
  items = [
    {label: "Czechia", checked: false},
    {label: "Slovakia", checked: false},
    {label: "Germany", checked: false},
    {label: "France", checked: false}
  ]

  constructor(private modalCRTL: ModalController) {
    this.items = this.getItems();

    const getStoredItems =async () => {
      const {value} = await Preferences.get({
        key: "jsonData"
      });
      if(value){
        const selectedItems = JSON.parse(value);
      this.items.forEach(item => {
        item.checked = selectedItems.some((selectedItem: { label: string; }) => selectedItem.label === item.label);
      });
      }

    }

    getStoredItems();

    /*const storedItems = localStorage.getItem('selectedItems');

    if(storedItems){
      const selectedItems = JSON.parse(storedItems);
      this.items.forEach(item => {
        item.checked = selectedItems.some((selectedItem: { label: string; }) => selectedItem.label === item.label);
      });
    }*/
  }

  dismissModal(){
    this.modalCRTL.dismiss(null,"cancel");
  }

  Submit(){
    const selectedItems = this.items.filter((item) => item.checked);

    const saveStoredItems =async () => {
      await Preferences.set({
        key: "jsonData",
        value: JSON.stringify(selectedItems)
      });
    }
    saveStoredItems();

    //localStorage.setItem("selectedItems", JSON.stringify(selectedItems))
    this.modalCRTL.dismiss(selectedItems, "location");
    //alert("AAAAHHHHHH");
  }

  getItems(){
    return this.items;
  }


}
