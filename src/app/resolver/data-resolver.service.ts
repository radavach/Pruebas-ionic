import { DataService } from '../services/data.service';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class DataResolverService implements Resolve<any>{

  constructor(public dataService:DataService) { }

  resolve(){
    return this.dataService.getData();
  }
}
