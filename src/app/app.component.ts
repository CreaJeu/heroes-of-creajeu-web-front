import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Heroes of CreaJeu';
  navLinks = [
    { path: 'dashboard', label:'Dashboard'},
    { path: 'heroes', label:'Heroes'},
    { path: 'achievements', label:'Achievements'}
  ];
}
