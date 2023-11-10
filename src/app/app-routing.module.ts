import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { levelsRoutes } from './modules/levels/levels.routes';

import { InitPageComponent } from './modules/start/components/init-page/init-page.component';
import { FullViewComponent } from './modules/levels/components/full-view/full-view.component';

const routes: Routes = [
  { path: 'start' , component: InitPageComponent },
  { path: 'levels', component: FullViewComponent, children: levelsRoutes },
  { path: '', pathMatch: 'full', redirectTo: 'start' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
