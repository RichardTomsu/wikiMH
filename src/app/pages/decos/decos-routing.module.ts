import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DecosPage } from './decos.page';

const routes: Routes = [
  {
    path: '',
    component: DecosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DecosPageRoutingModule {}
