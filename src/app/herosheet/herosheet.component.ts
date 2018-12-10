import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-herosheet',
  templateUrl: './herosheet.component.html',
  styleUrls: ['./herosheet.component.css']
})
export class HerosheetComponent implements OnInit {

  constructor() {
  }

  @Input() hero : Hero;

  ngOnInit() {
  }

}
