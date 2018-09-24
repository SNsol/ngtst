
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HerosComponent } from './heros/heros.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';

export const routes: Routes = [
    { path: 'hero', children: [
        { path: '', component: HerosComponent },
        { path: ':id', component: HeroDetailsComponent }
      ]
    }, // default route of the module
];
  
export const routing: ModuleWithProviders = RouterModule.forChild(routes);