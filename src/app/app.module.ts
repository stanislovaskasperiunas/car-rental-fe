import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import {RouterModule} from "@angular/router";
import { AdminComponent } from './components/admin/admin.component';
import { CarsComponent } from './components/cars/cars.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { CreateCarComponent } from './components/create-car/create-car.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    AdminComponent,
    CarsComponent,
    CreateCarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'admin', component : AdminComponent},
      {path: 'user', component : UserComponent},
      {path: 'create-car', component: CreateCarComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
