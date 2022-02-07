import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import {AppRoutingModule} from './app-routing.module'

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, UsersComponent ],
  imports: [BrowserModule, HttpClientModule , AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
