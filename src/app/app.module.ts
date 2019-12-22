import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { PatientProfileComponent } from './component/common/patient-profile/patient-profile.component';
import { MaterialModule } from './material/material.module';
import { PatientPrescriptionComponent } from './component/common/patient-prescription/patient-prescription.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientProfileComponent,
    PatientPrescriptionComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
