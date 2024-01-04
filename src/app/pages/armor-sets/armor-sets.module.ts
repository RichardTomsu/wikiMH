import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArmorSetsPageRoutingModule } from './armor-sets-routing.module';

import { ArmorSetsPage } from './armor-sets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArmorSetsPageRoutingModule
  ],
  declarations: [ArmorSetsPage]
})
export class ArmorSetsPageModule {}
