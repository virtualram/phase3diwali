import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleDirective } from './example.directive';
import { MyserviceService } from './myservice.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SubAppComponent } from './sub-app/sub-app.component';




@NgModule({
  declarations: [
    AppComponent,
    ExampleDirective,
    SubAppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
