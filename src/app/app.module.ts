import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TableModule,
    MultiSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
