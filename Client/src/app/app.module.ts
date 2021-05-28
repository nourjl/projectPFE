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
import { ListeComponent } from './liste/liste.component';
import {DataViewModule} from 'primeng/dataview';


const appRoutes: Routes = [
  { path: '', component:  NavbarComponent },
  { path: 'user', component: UserComponent },
  { path: 'owner', component: OwnerComponent },
  { path: 'home', component:NavbarComponent  },
  { path: 'liste',component:ListeComponent}
];

@NgModule({
  declarations: [
    NavbarComponent,
    AppComponent,
    UserComponent,
    OwnerComponent,
    ListeComponent,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    DataViewModule
  ],
  providers: [OwnerDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
