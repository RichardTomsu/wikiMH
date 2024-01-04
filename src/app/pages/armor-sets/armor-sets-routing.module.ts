import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArmorSetsPage } from './armor-sets.page';

const routes: Routes = [
  {
    path: '',
    component: ArmorSetsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArmorSetsPageRoutingModule {}
