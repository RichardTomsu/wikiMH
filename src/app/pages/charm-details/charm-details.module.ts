import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharmDetailsPageRoutingModule } from './charm-details-routing.module';

import { CharmDetailsPage } from './charm-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharmDetailsPageRoutingModule
  ],
  declarations: [CharmDetailsPage]
})
export class CharmDetailsPageModule {}
