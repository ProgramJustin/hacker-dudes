import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Hacker } from '../hacker.model';
import { HackerService } from '../hacker.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-hacker-detail',
  templateUrl: './hacker-detail.component.html',
  styleUrls: ['./hacker-detail.component.css'],
  providers: [HackerService]
})
export class HackerDetailComponent implements OnInit {
  hackerId: string;
  hackerToDisplay;

  constructor(private route: ActivatedRoute,
    private location: Location,
    private HackerService: HackerService) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
       this.hackerId = urlParameters['id'];
     });

     this.hackerToDisplay = this.HackerService.getHackerById(this.hackerId);
    }
  }
