import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListmodeleComponent } from './components/listmodele/listmodele.component';
import { ListmodeledetailComponent } from './components/listmodeledetail/listmodeledetail.component';
import { AjoutmodeleComponent } from './components/ajoutmodele/ajoutmodele.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './components/ajoutmodele/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListmodeleComponent,
    ListmodeledetailComponent,
    AjoutmodeleComponent,
    AboutComponent,
    ContactComponent,
    NotfoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    provideHttpClient(withFetch())
    // provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
