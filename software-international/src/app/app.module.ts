import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {RapidApiKeyInterceptor} from "./shared/interceptors/rapid-api.interceptor";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      AppRoutingModule,
      SharedModule,
      HttpClientModule
    ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RapidApiKeyInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
