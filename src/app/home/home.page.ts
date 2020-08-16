import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  photos:any = [];
  text:boolean[] = [];

  constructor(
    public camera:Camera, 
    public imagePicker:ImagePicker, 
    public route: ActivatedRoute,
    public router:Router, 
    public dataService:DataService) {
  }

  ngOnInit(){
    if(this.route.snapshot.data['photos']){
      // this.photos = Object.assign([], this.route.snapshot.data['photos']);
      this.photos = this.route.snapshot.data['photos'];
    }
  }

  continue(){
    this.dataService.setData(this.photos);
    this.router.navigated = false;
    this.router.navigateByUrl('load-images');
  }

  showText(index:any){
    this.text[index] = !this.text[index];
  }

  takePhotoCamera(){
    const options: CameraOptions={
      quality:100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA,
      targetWidth: 200
    }
    
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.photos.push(base64Image);
      this.text.push(false);
     }, (err) => {
      // Handle error
     });
  }

  selectPhotoPicker(){
    const options = {
      quality: 25,
      outputType: 1,
      width: 200
    }
    
    this.imagePicker.getPictures(options).then((results) => {
      for (var i = 0; i < results.length; i++) {
        this.photos.push('data:image/jpeg;base64,' + results[i]);
      }
    }, (err) => {
      alert(err);
    });
  }

  selectPhotoCamera(){
    const options: CameraOptions={
      quality:100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      targetWidth: 200
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.photos.push(base64Image);
      this.text.push(false);
     }, (err) => {
      // Handle error
     });
  }
}
