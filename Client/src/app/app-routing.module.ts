import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './modules/general/user/user.component';
import { OwnerComponent } from './modules/general/owner/owner.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

const appRoutes: Routes = [
  { path: '', component: NavbarComponent },
  { path: 'user', component: UserComponent },
  { path: 'owner', component: OwnerComponent },
  { path: 'home', component: NavbarComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
export const routingComponents= [UserComponent, OwnerComponent, NavbarComponent]
