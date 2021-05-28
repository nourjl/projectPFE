import { Component, Input, NgModule, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {OwnerComponent} from '../owner/owner.component';

import * as THREE from 'three';
import * as THREESTLLoader from 'three-stl-loader' ;
import { OwnerDataService } from '../services/owner-data.service';

var STLLoader = new THREESTLLoader(THREE) 
var loader = new STLLoader();

@Component({
  providers:[OwnerComponent],
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})


export class UserComponent implements OnInit {

  @ViewChild(OwnerComponent) owner: OwnerComponent;
  w : number=0;
  h : number=0;
  d : number=0;
  v : number=0;
  cost: number=0;
  time: string="";
  fileToUpload: any;
  ownerName:any;
  costH;
  costKG;
  filament_diameter;
  costLabor;
  marg;
  material;
  PrintSpeed;
  extra;
  
  constructor(private router: Router, private Owner: OwnerComponent, private ownerDataService:OwnerDataService) {}

  ngOnInit(): void {
    this.ownerDataService.currentOwner.subscribe((value) => {
      console.log("data in user",value);
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

  handleFileInput($event :any, userForm:NgForm)
  { 
    loader.load('../assets/img/exemple1.stl', (geometry:any ) => 
    {
 
      var material=new THREE.MeshPhongMaterial({color:0xffffff});
      var mesh = new THREE.Mesh(geometry, material);

      //volume

      function signedVolumeOfTriangle(p1,p2,p3)
      {
          var v321 = p3.x*p2.y*p1.z;
          var v231 = p2.x*p3.y*p1.z;
          var v312 = p3.x*p1.y*p2.z;
          var v132 = p1.x*p3.y*p2.z;
          var v213 = p2.x*p1.y*p3.z;
          var v123 = p1.x*p2.y*p3.z;
          return (-v321 + v231 + v312 - v132 - v213 + v123)/6;
      }

      var vol=0; 

      mesh.traverse(function(child)
      {
        if(child instanceof THREE.Mesh)
        {
          var positions=child.geometry.getAttribute("position").array;
          for(var i=0;i<positions.length; i+=9)
          {
            var t1 = {x:0,y:0,z:0};
            t1.x = positions[i+0];
            t1.y = positions[i+1];
            t1.z = positions[i+2];

            var t2 = {x:0,y:0,z:0};
            t2.x = positions[i+3];
            t2.y = positions[i+4];
            t2.z = positions[i+5];

            var t3 = {x:0,y:0,z:0};
            t3.x = positions[i+6];
            t3.y = positions[i+7];
            t3.z = positions[i+8];

            vol+=signedVolumeOfTriangle(t1,t2,t3);
          }
        }
      });

      const density= userForm.value['density'];
      var filament_diameter= this.filament_diameter;
      const PrintSpeed=this.PrintSpeed;
    
      var box=new THREE.Box3().setFromObject(mesh);
      var height = box.max.z - box.min.z;
      var width = box.max.x - box.min.x;
      var depth = box.max.y - box.min.y;

      var heightF = height / 10;
      var widthF = width / 10;
      var depthF = depth / 10;
      var volumeF = vol / 1000;
      var weightF = volumeF * density;
      var filament_length = (( vol / ( filament_diameter / 2 ) ^ 2 / Math.PI ) * 2 / 10);   

      //time 
      var filcost= this.costKG;
      var hours = Math.floor((filament_length / PrintSpeed) / 60);
      var min=(filament_length/PrintSpeed)%60;

      if (min==0) {min=1;}
  
      var hourF=hours.toFixed(0);
      var minF=min.toFixed(0);
      var cost=(weightF*filcost)/1000;

      this.v=volumeF;
      this.d=depthF;
      this.w=weightF;
      this.h=heightF;
      this.time='Hours : '.concat(hourF).concat('Min : ').concat(minF);
      this.cost=cost;
      
    })    
  }

  onFormSubmitUser(userForm:NgForm)
  {
    alert("user form was submitted");
    console.log(userForm.value);
  }
  
  resetUserForm(userForm:NgForm)
  {
    userForm.resetForm();
  }

  public test():void
  {
    console.log("testt name ",this.ownerName);
    console.log("test cost",this.costH)
  }


}
