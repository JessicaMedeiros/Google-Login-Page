import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './views/home/home.component';
import { LanguageService } from './language.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule, 
    MatCardModule, 
    MatChipsModule,
    MatDatepickerModule,
    MatButtonToggleModule,
    FormsModule, 
    MatInputModule, 
    MatButtonModule, 
    MatExpansionModule, 
    MatGridListModule, 
    MatSelectModule, 
    MatMenuModule
  ], exports:[
    MatFormFieldModule,
    MatButtonModule, 
    MatCardModule, 
    MatChipsModule,
    MatDatepickerModule,
    MatButtonToggleModule, 
    MatExpansionModule, 
    MatGridListModule
  ],
  providers: [ 
    LanguageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
