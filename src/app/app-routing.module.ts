import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InitPageComponent } from './modules/start/components/init-page/init-page.component';
import { FullViewComponent } from './modules/levels/components/full-view/full-view.component';

const routes: Routes = [
  { path: 'start' , component: InitPageComponent },
  { path: 'level/:id', component: FullViewComponent },
  { path: '', pathMatch: 'full', redirectTo: 'start' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
