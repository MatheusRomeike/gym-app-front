import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { InputFieldComponent } from './shared/components/input-field/input-field.component';

const authenticatorService = [Interceptor];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoggedComponent,
    NavbarComponent,
    LoadingComponent,
    AlertComponent,
    InputFieldComponent,
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
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    CurrencyMaskModule,
  ],
})
export class AppModule {}
