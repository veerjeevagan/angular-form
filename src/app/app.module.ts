import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ArchwizardModule} from 'angular-archwizard';
import {FormsModule} from "@angular/forms"

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';

 
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    ArchwizardModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

