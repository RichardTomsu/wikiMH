import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeaponDetailsPage } from './weapon-details.page';

const routes: Routes = [
  {
    path: '',
    component: WeaponDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeaponDetailsPageRoutingModule {}
