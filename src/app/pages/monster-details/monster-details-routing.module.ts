import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonsterDetailsPage } from './monster-details.page';

const routes: Routes = [
  {
    path: '',
    component: MonsterDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonsterDetailsPageRoutingModule {}
