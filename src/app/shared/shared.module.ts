import { NgModule } from '@angular/core';
import { AutoCompleteComponent } from './components/auto-complete/auto-complete.component';
import { DataFormComponent } from './components/data-form/data-form.component';
import { HeaderComponent } from './components/header/header.component';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { LoadingComponent } from './components/loading/loading.component';
import { AlertComponent } from './components/alert/alert.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  IConfig,
  NgxMaskDirective,
  NgxMaskPipe,
  provideNgxMask,
} from 'ngx-mask';
import { CommonModule } from '@angular/common';

export const options: Partial<null | IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  providers: [provideNgxMask()],
  declarations: [
    AutoCompleteComponent,
    DataFormComponent,
    HeaderComponent,
    InputFieldComponent,
    LoadingComponent,
    AlertComponent,
  ],
  exports: [
    AutoCompleteComponent,
    DataFormComponent,
    HeaderComponent,
    InputFieldComponent,
    LoadingComponent,
    AlertComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    NgxMaskDirective,
    NgxMaskPipe,
    FontAwesomeModule,
    MatExpansionModule,
    MatProgressBarModule,
  ],
})
export class SharedModule {}
