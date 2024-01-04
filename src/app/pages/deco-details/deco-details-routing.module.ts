import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DecoDetailsPage } from './deco-details.page';

const routes: Routes = [
  {
    path: '',
    component: DecoDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DecoDetailsPageRoutingModule {}
