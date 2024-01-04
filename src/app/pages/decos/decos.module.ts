import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DecosPageRoutingModule } from './decos-routing.module';

import { DecosPage } from './decos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DecosPageRoutingModule
  ],
  declarations: [DecosPage]
})
export class DecosPageModule {}
