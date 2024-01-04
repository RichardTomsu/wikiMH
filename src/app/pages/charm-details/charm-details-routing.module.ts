import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharmDetailsPage } from './charm-details.page';

const routes: Routes = [
  {
    path: '',
    component: CharmDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharmDetailsPageRoutingModule {}
