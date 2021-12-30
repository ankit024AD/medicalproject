import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { FormsModule } from '@angular/forms';

import { AgGridModule } from 'ag-grid-angular';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ButtonRenderer } from './cellrender/buttonrenderer';

@NgModule({
  declarations: [
    AppComponent,
                          
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AgGridModule.withComponents([ButtonRenderer]),
    FormsModule,
    
    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
