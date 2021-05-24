import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/task.service';
import { Owner } from '../../models/owner.model';
import { OwnerDataService } from '../services/owner-data.service';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})

export class OwnerComponent implements OnInit {
  documentsForm: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder, private ownerDataService: OwnerDataService, private taskService: TaskService ) { }

  ngOnInit(): void {
    this.documentsForm = this.formBuilder.group({
      nameOwner: ["Owner 1"],
      costH : [10],
      costKG: [20],
      filament_diameter: [15],
      costLabor: [3],
      marg: [5],
      material:  ["Material 1"],
      PrintSpeed: [12],
      extra: [10],

    })

  }


  onFormSubmit() {
    console.log("Here onFormSubmit ==>", this.documentsForm);
    // here create new instance of Owner and send it to service
    let currentOwner: Owner = new Owner();

    currentOwner.ownerName = this.documentsForm.controls.nameOwner.value;
    currentOwner.costH= this.documentsForm.controls.costH.value;
    currentOwner.costKG= this.documentsForm.controls.costKG.value;
    currentOwner.filament_diameter= this.documentsForm.controls.filament_diameter.value;
    currentOwner.costLabor= this.documentsForm.controls.costLabor.value;
    currentOwner.marg= this.documentsForm.controls.marg.value;
    currentOwner.material= this.documentsForm.controls.material.value;
    currentOwner.PrintSpeed= this.documentsForm.controls.PrintSpeed.value;
    currentOwner.extra=this.documentsForm.controls.extra.value;

    this.ownerDataService.setOwner(currentOwner);

  }

  resetOwnerForm(ownerForm: FormGroup) {
    ownerForm.reset();
  }

  createOwner(){
    this.taskService.createOwner('test').subscribe((response: any) =>{
      console.log(response)

    });
  }


}
