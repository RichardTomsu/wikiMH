import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  /*
  {
    path: 'detail/:id',
    loadChildren: () => import('./pages/detail/detail.module').then( m => m.DetailPageModule)
  },*/
  {
    path: 'monsters',
    loadChildren: () => import('./pages/monsters/monsters.module').then( m => m.MonstersPageModule)
  },
  {
    path: 'armor-sets',
    loadChildren: () => import('./pages/armor-sets/armor-sets.module').then( m => m.ArmorSetsPageModule)
  },
  {
    path: 'decos',
    loadChildren: () => import('./pages/decos/decos.module').then( m => m.DecosPageModule)
  },
  {
    path: 'charms',
    loadChildren: () => import('./pages/charms/charms.module').then( m => m.CharmsPageModule)
  },
  {
    path: 'weapons',
    loadChildren: () => import('./pages/weapons/weapons.module').then( m => m.WeaponsPageModule)
  },
  {
    path: 'monster-details',
    loadChildren: () => import('./pages/monster-details/monster-details.module').then( m => m.MonsterDetailsPageModule)
  },
  {
    path: 'weapon-details',
    loadChildren: () => import('./pages/weapon-details/weapon-details.module').then( m => m.WeaponDetailsPageModule)
  },
  {
    path: 'charm-details',
    loadChildren: () => import('./pages/charm-details/charm-details.module').then( m => m.CharmDetailsPageModule)
  },
  {
    path: 'deco-details',
    loadChildren: () => import('./pages/deco-details/deco-details.module').then( m => m.DecoDetailsPageModule)
  },
  {
    path: 'armor-details',
    loadChildren: () => import('./pages/armor-details/armor-details.module').then( m => m.ArmorDetailsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
