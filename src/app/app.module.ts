import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyContainerComponent } from './myContainer/myContainer.component';
import { TopnavComponent } from './myContainer/topnav/topnav.component';
import { HeaderComponent } from './myContainer/header/header.component';
import { Textsec1Component } from './myContainer/textsec1/textsec1.component';
import { Textsec2Component } from './myContainer/textsec2/textsec2.component';
import { DatabindingComponent } from './myContainer/databinding/databinding.component';
import { ClassStyleComponent } from './myContainer/class-style/class-style.component';
import { EventbindComponent } from './myContainer/eventbind/eventbind.component';
import { TwoWayDataComponent } from './myContainer/two-way-data/two-way-data.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//NGX-BOOTSTRAP
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { NgifComponent } from './myContainer/ngif/ngif.component';
import { NgswitchComponent } from './myContainer/ngswitch/ngswitch.component';
import { NgforComponent } from './myContainer/ngfor/ngfor.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';


const appRoutes:Routes = [
  {path:'',redirectTo:'login' , pathMatch:'full'},
  {path:'home',component: HomeComponent},
  {path:'about',component:AboutusComponent},
  {path:'products',component:ProductsComponent},
  {path:'login',component:LoginComponent},
  {path:'contact',component:ContactComponent},
  {path:'**',component:NotfoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MyContainerComponent,
    TopnavComponent,
    HeaderComponent,
    Textsec1Component,
    Textsec2Component,
    DatabindingComponent,
    ClassStyleComponent,
    EventbindComponent,
    TwoWayDataComponent,
    NgifComponent,
    NgswitchComponent,
    NgforComponent,
    HomeComponent,
    ContactComponent,
    ProductsComponent,
    AboutusComponent,
    LoginComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
