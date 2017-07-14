import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Hacker } from '../hacker.model';

@Component({
  selector: 'app-hacker-detail',
  templateUrl: './hacker-detail.component.html',
  styleUrls: ['./hacker-detail.component.css']
})
export class HackerDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
