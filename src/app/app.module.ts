import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HerosheetComponent } from './herosheet/herosheet.component';
import { HeroeslistComponent } from './heroeslist/heroeslist.component';
import { AchievementlistComponent } from './achievementlist/achievementlist.component';
import { DashboardComponent } from './dashboard/dashboard.component'

@NgModule({
  declarations: [
    AppComponent,
    HerosheetComponent,
    HeroeslistComponent,
    AchievementlistComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
