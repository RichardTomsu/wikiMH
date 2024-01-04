import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonsterDetailsPageRoutingModule } from './monster-details-routing.module';

import { MonsterDetailsPage } from './monster-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonsterDetailsPageRoutingModule
  ],
  declarations: [MonsterDetailsPage]
})
export class MonsterDetailsPageModule {}
