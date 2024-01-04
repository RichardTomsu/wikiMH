import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DecoDetailsPageRoutingModule } from './deco-details-routing.module';

import { DecoDetailsPage } from './deco-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DecoDetailsPageRoutingModule
  ],
  declarations: [DecoDetailsPage]
})
export class DecoDetailsPageModule {}
