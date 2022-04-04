import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EmployeeDataComponent } from './employee-data/employee-data.component';
import { CustomPipe } from './custom-pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDataComponent,
    CustomPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
