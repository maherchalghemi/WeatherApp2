import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { MenuComponent } from './menu/menu.component';

import { Routes, RouterModule } from '@angular/router';
import { UppercaseComponent } from './uppercase/uppercase.component';
import { CatalogueDetailsComponent } from './catalogue-details/catalogue-details.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'prefix'
   },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'catalogue',
    component:CatalogueComponent
  },
  {
    path:'uppercase',
    component:UppercaseComponent
  },
  {
    path:'details/:i1/:i2',
    component:CatalogueDetailsComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatalogueComponent,
    MenuComponent,
    UppercaseComponent,
    CatalogueDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
