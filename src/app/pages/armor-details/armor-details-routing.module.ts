import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArmorDetailsPage } from './armor-details.page';

const routes: Routes = [
  {
    path: '',
    component: ArmorDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArmorDetailsPageRoutingModule {}
