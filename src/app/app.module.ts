import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpInterceptorService } from './common/http.interceptor.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { AuthGuard } from './common/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NgxPermissionsModule } from 'ngx-permissions';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { NgBootstrapFormValidationModule, CUSTOM_ERROR_MESSAGES } from 'ng-bootstrap-form-validation';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { CUSTOM_ERRORS } from "./common/custom-errors";
import { LaddaModule } from 'angular2-ladda';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPermissionsModule.forRoot({
    }),
    NgBootstrapFormValidationModule,
    NgBootstrapFormValidationModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    LaddaModule.forRoot({
      style: "zoom-in",
      spinnerSize: 20,
      spinnerColor: "white",
      spinnerLines: 12
    }),
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    TooltipModule.forRoot()
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    },
    {
      provide: CUSTOM_ERROR_MESSAGES,
      useValue: CUSTOM_ERRORS,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
