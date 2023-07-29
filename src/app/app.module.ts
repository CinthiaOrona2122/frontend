import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Modules
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

//Components
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { AddEditProductsComponent } from './components/add-edit-products/add-edit-products.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListProductsComponent,
    AddEditProductsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
