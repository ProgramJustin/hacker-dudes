import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Hacker } from '../hacker.model';
import { HackerService } from '../hacker.service';

@Component({
  selector: 'app-hacker-detail',
  templateUrl: './hacker-detail.component.html',
  styleUrls: ['./hacker-detail.component.css'],
  providers: [HackerService]
})
export class HackerDetailComponent implements OnInit {
  hackerId: string;
  hackerToDisplay;

  constructor() { }

  ngOnInit() {
  }

}
