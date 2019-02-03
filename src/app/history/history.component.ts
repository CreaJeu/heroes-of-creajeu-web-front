import { Component, OnInit } from '@angular/core';
import { HistoryRecord } from '../history-record';
import { HistoryService } from '../history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit 
{
  constructor(private historyService: HistoryService) { }

  history: HistoryRecord[];

  ngOnInit() {
    this.historyService.getHistory()
      .subscribe(_history => this.history = _history);
  }
}
