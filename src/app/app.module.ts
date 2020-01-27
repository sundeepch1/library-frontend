import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpInterceptorService } from './common/http.interceptor.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { AuthGuard } from './common/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NgxPermissionsModule } from 'ngx-permissions';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPermissionsModule.forRoot({
    }),
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
