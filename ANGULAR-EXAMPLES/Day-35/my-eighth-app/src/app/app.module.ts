import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MdfDemoComponent } from './mdf-demo/mdf-demo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControlActivityComponent } from './form-control-activity/form-control-activity.component';

@NgModule({
  declarations: [
    AppComponent,
    MdfDemoComponent,
    FormControlActivityComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
