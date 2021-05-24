import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';

  constructor(private router: Router) {}

  changementPageOwner() :  void {
    this.router.navigate(['/owner']);

   }

  changementPageUser() : void {
    this.router.navigate([`/user`]);


  }

  chargementPageHome() : void {
    this.router.navigate(['/']);
  }



}
