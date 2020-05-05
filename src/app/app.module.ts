import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RoutingModule } from './routing.module';
import { FullLayoutComponent } from './full-layout/full-layout.component';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule
  ],
  declarations: [
    FullLayoutComponent,
    AppComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
