import { NgModule } from '@angular/core';
import { AutoCompleteComponent } from './components/auto-complete/auto-complete.component';
import { DataFormComponent } from './components/data-form/data-form.component';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { LoadingComponent } from './components/loading/loading.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  IConfig,
  NgxMaskDirective,
  NgxMaskPipe,
  provideNgxMask,
} from 'ngx-mask';
import { CommonModule } from '@angular/common';
import { ToastNoAnimationModule } from 'ngx-toastr';
import { RouterModule } from '@angular/router';
import { DefaultPageComponent } from './components/default-page/default-page.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

export const options: Partial<null | IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  providers: [provideNgxMask()],
  declarations: [
    AutoCompleteComponent,
    DataFormComponent,
    InputFieldComponent,
    LoadingComponent,
    DefaultPageComponent,
    HeaderComponent,
    SidenavComponent,
  ],
  exports: [
    AutoCompleteComponent,
    DataFormComponent,
    InputFieldComponent,
    LoadingComponent,
    ToastNoAnimationModule,
    RouterModule,
    DefaultPageComponent,
    HeaderComponent,
    SidenavComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    NgxMaskDirective,
    NgxMaskPipe,
    FontAwesomeModule,
    MatExpansionModule,
    MatProgressBarModule,
    ToastNoAnimationModule.forRoot(),
    RouterModule,
  ],
})
export class SharedModule {}
