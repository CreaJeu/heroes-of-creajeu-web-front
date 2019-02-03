import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Heroes of CreaJeu';
  navLinks = [
    { path: 'heroes', label:'Heroes'},
    { path: 'achievements', label:'Achievements'},
    { path: 'history', label:'History'}
  ];
}
