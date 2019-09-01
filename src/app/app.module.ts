import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GsComponent } from './gs/gs.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { JoinedPipe } from './joined.pipe';
import { CoolDirective } from './cool.directive';

@NgModule({
  declarations: [
    AppComponent,
    GsComponent,
    AboutComponent,
    NavigatorComponent,
    NotFoundComponent,
    JoinedPipe,
    CoolDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
