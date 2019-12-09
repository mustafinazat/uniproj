import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {PrimengLoaderModule} from './primeng-loader/primeng-loader.module';
import { AuthModule } from './auth/auth.module';
import { LocalStorageService } from './services/local-storage.service';
import { HttpService } from './services/http.service';
import { TokenInterceptor } from './interceptors/token.interceptor';
//import { RefreshTokenInterceptor } from './interceptors/refresh-token.interceptor';

@NgModule({
  imports: [
    CommonModule,
    PrimengLoaderModule,
    BrowserAnimationsModule,
    FormsModule,
    AuthModule
   
  ],
  declarations: [
    
  ],
  exports: [
    PrimengLoaderModule,
    AuthModule,
    FormsModule
  ],
  providers: [
    LocalStorageService,
    HttpService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
    // ,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: RefreshTokenInterceptor,
    //   multi: true
    // }
  ]
})
export class CoreModule { }
