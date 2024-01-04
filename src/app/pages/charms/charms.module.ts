import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharmsPageRoutingModule } from './charms-routing.module';

import { CharmsPage } from './charms.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharmsPageRoutingModule
  ],
  declarations: [CharmsPage]
})
export class CharmsPageModule {}
