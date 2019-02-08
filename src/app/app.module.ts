import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { AuthComponent } from './auth/auth.component';
import { ContactComponent } from './about/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    AboutComponent,
    AuthComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
