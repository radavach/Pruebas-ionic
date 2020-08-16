import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DataResolverService } from './resolver/data-resolver.service';

const routes: Routes = [
  { path: 'home', resolve: { photos:DataResolverService }, loadChildren: () => import('./home/home.module').then( m => m.HomePageModule) },
  { path: 'load-images', resolve: { photos:DataResolverService }, loadChildren: () => import('./load-images/load-images.module').then( m => m.LoadImagesPageModule) },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
