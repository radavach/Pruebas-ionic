import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

import { DataService } from '../services/data.service';

@Component({
  selector: 'app-load-images',
  templateUrl: './load-images.page.html',
  styleUrls: ['./load-images.page.scss'],
})
export class LoadImagesPage implements OnInit {

  photos:any = [];
  index:any=0;

  @ViewChild('slideWithNav', { static: false }) slideWithNav: IonSlides;

  slideOptsThree = {
    initialSlide: 0,
    slidesPerView: 5
  };

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    public alertController: AlertController,
    public dataService: DataService) {
  }

  ngOnInit() {
    if(this.route.snapshot.data['photos']){
      this.photos = this.route.snapshot.data['photos'];
    }
  }

  slideSelected(i){
    this.index = i; 
  }

  removeSlides(){
    this.photos.splice(this.index,1);
    if(this.index > this.photos.length-1){
      this.index = this.photos.length-1;
    }
  }

  async continue(){
    let alert = await this.alertController.create({
      header: 'Confirma',
      message: '¿Estas son las fotos que deseas subir?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
          }
        }
      ]
    });
    if(this.photos.length > 3){
      alert = await this.alertController.create({
        header: 'Alerta',
        message: 'Tienes seleccionadas más de 3, fotos elimina para continuar',
        buttons: ['OK']
      });
    }
    else if(this.photos.length < 1){
      alert = await this.alertController.create({
        header: 'Alerta',
        message: 'Debes tener al menos 1 foto, agrega alguna',
        buttons: ['OK']
      });
    }
    await alert.present();
  }

  loadMorePhotos(){
    this.dataService.setData(this.photos);
    this.router.navigated = false;
    this.router.navigateByUrl('home');
  }
}
