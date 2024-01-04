import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeaponDetailsPageRoutingModule } from './weapon-details-routing.module';

import { WeaponDetailsPage } from './weapon-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeaponDetailsPageRoutingModule
  ],
  declarations: [WeaponDetailsPage]
})
export class WeaponDetailsPageModule {}
