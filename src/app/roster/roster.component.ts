import { Component, OnInit } from '@angular/core';
import { HackerService } from '../hacker.service'

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css'],
  providers: [HackerService]
})
export class RosterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
