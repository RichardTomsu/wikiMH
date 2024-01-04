import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArmorDetailsPageRoutingModule } from './armor-details-routing.module';

import { ArmorDetailsPage } from './armor-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArmorDetailsPageRoutingModule
  ],
  declarations: [ArmorDetailsPage]
})
export class ArmorDetailsPageModule {}
