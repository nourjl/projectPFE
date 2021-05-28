import { Component, OnInit, ViewChild } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import {SelectItem} from 'primeng/api';
import {Owner} from '../modules/models/owner.model';
import {OwnerDataService} from '../modules/general/services/owner-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  
  ownerName:any;
  costH;
  costKG;
  filament_diameter;
  costLabor;
  marg;
  material;
  PrintSpeed;
  extra;

  constructor(private primengConfig: PrimeNGConfig, private router: Router, private ownerDataService:OwnerDataService) { 
  }

  ngOnInit(): void {
    this.ownerDataService.currentOwner.subscribe((value) => {
      console.log(value);
      this.ownerName=value.ownerName;
      this.costH=value.costH;
      this.costKG=value.costKG; 
      this.filament_diameter=value.filament_diameter;
      this.costLabor=value.costLabor; 
      this.marg=value.marg;
      this.material=value.material;
      this.PrintSpeed=value.PrintSpeed;
      this.extra=value.extra;
    });

  }

}
