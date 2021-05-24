import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './modules/general/user/user.component';
import { OwnerComponent } from './modules/general/owner/owner.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { OwnerDataService } from './modules/general/services/owner-data.service';
import { HttpClientModule } from '@angular/common/http';


const appRoutes: Routes = [
  { path: '', component:  NavbarComponent },
  { path: 'user', component: UserComponent },
  { path: 'owner', component: OwnerComponent },
  { path: 'home', component:NavbarComponent  }
];

@NgModule({
  declarations: [
    NavbarComponent,
    AppComponent,
    UserComponent,
    OwnerComponent,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [OwnerDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
