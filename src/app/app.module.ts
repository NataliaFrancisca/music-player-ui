import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { NavContentComponent } from './components/nav-content/nav-content.component';
import { MenuContentComponent } from './components/menu-content/menu-content.component';

@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    NavContentComponent,
    MenuContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
