import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoadImagesPageRoutingModule } from './load-images-routing.module';

import { LoadImagesPage } from './load-images.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoadImagesPageRoutingModule
  ],
  declarations: [LoadImagesPage]
})
export class LoadImagesPageModule {}
