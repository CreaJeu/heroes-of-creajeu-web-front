import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroeslistComponent } from './heroeslist/heroeslist.component'
import { HerosheetComponent } from './herosheet/herosheet.component';
import { AchievementlistComponent } from './achievementlist/achievementlist.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'heroes', component: HeroeslistComponent },
  { path: 'hero/:id', component: HerosheetComponent },
  { path: 'achievements', component: AchievementlistComponent },
  { path: 'history', component: HistoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
