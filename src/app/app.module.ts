import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { Interceptor } from './shared/interceptor/interceptor';

import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { LoggedComponent } from './views/logged/logged.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { LoadingComponent } from './shared/components/loading/loading.component';
import { AlertComponent } from './shared/components/modal/alert.component';

const authenticatorService = [Interceptor];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoggedComponent,
    NavbarComponent,
    LoadingComponent,
    AlertComponent,
  ],
  providers: [
    authenticatorService,
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true },
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
  ],
})
export class AppModule {}
