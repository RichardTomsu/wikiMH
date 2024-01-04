import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharmsPage } from './charms.page';

const routes: Routes = [
  {
    path: '',
    component: CharmsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharmsPageRoutingModule {}
