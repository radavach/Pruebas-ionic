import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoadImagesPage } from './load-images.page';

const routes: Routes = [
  {
    path: '',
    component: LoadImagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoadImagesPageRoutingModule {}
