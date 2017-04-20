import { NgModule}       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule, RequestOptions } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent }       from './app.component';
import { AppRoutes }       from './app.routes';
import { ArticlesModule } from './articles/articles.module';
import { CoursesModule } from './courses/courses.module';
import { HomeModule } from './home/home.module';
import { MotivationModule } from './motivation/motivation.module';
import { AuthenticationService } from './authentication/authentication.service';
import { AuthenticationModule } from './authentication/authentication.module';
@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AuthenticationModule,
    HomeModule,
    ArticlesModule,
    CoursesModule,
    MotivationModule,
    RouterModule.forRoot(AppRoutes),
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
