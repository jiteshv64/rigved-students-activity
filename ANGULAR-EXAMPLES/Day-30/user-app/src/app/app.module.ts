import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UserDataComponent } from './user-data/user-data.component';
import { CustomTitle } from './user-data/user-pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserDataComponent,
    CustomTitle
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
