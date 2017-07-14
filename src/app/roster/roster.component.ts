import { Component, OnInit } from '@angular/core';
import { Hacker } from '../hacker.model'
import { Router } from '@angular/router';
import { HackerService } from '../hacker.service';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css'],
  providers: [HackerService]
})
export class RosterComponent implements OnInit {

  hackers: FirebaseListObservable<any[]>;

  constructor(private router: Router, private hackerService: HackerService) { }

  ngOnInit(){
  this.hackers = this.hackerService.getHackers();
}

goToDetailPage(clickedHacker) {
  this.router.navigate(['hackers', clickedHacker.$key]);

 };
}
