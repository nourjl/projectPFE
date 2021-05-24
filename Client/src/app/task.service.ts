import { Injectable } from '@angular/core';
import { AppHttpService } from './services/app-http.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private appHttpService: AppHttpService) { }

  createOwner(ownerName){
    return this.appHttpService.post('owner',{ownerName})
  }
}
