import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { AdminModule } from './admin/admin.module';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyDwrqc_R1YBppv_Jy2Ccy9lEvCKOrwkRIg',
  authDomain: 'angular-portfolio-4bddf.firebaseapp.com',
  databaseURL: 'https://angular-portfolio-4bddf.firebaseio.com',
  projectId: 'angular-portfolio-4bddf',
  storageBucket: 'angular-portfolio-4bddf.appspot.com',
  messagingSenderId: '108931625575'
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  providers: [],
  // The providers array which can be used to include the services we want to provide to our components,
  bootstrap: [AppComponent]
  // The bootstrap array which specifies the component(s) to bootstrap.
})
export class AppModule { }
