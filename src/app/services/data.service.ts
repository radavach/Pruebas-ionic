import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data = [];

  constructor() { }

  resetData(){
    this.data = [];
  }

  setData(data){
    this.data = data;
    // this.data = Object.assign([], data);
  }

  getData(){
    if(this.data.length == 0){
      this.data.push("https://img.freepik.com/vector-gratis/fondo-pintura-acuarela-rosa-vibrante_53876-58930.jpg?size=626&ext=jpg");
      this.data.push("https://img.freepik.com/vector-gratis/fondo-acuarela_220290-34.jpg?size=626&ext=jpg");
      this.data.push("https://img.freepik.com/foto-gratis/fondo-negro-vacio-luz-iluminada-ademas_93675-45849.jpg?size=626&ext=jpg");
      this.data.push("https://img.freepik.com/vector-gratis/fondo-pintura-acuarela-rosa-vibrante_53876-58930.jpg?size=626&ext=jpg");
      this.data.push("https://img.freepik.com/vector-gratis/fondo-acuarela_220290-34.jpg?size=626&ext=jpg");
      this.data.push("https://img.freepik.com/foto-gratis/fondo-negro-vacio-luz-iluminada-ademas_93675-45849.jpg?size=626&ext=jpg");
      this.data.push("https://img.freepik.com/vector-gratis/fondo-pintura-acuarela-rosa-vibrante_53876-58930.jpg?size=626&ext=jpg");
      this.data.push("https://img.freepik.com/vector-gratis/fondo-acuarela_220290-34.jpg?size=626&ext=jpg");
      this.data.push("https://img.freepik.com/foto-gratis/fondo-negro-vacio-luz-iluminada-ademas_93675-45849.jpg?size=626&ext=jpg");
    }
    return this.data;
  }
}
