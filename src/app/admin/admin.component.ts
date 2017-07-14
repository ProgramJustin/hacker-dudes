import { Component, OnInit } from '@angular/core';
import { HackerService } from '../hacker.service';
import { Hacker } from '../hacker.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [HackerService]
})
export class AdminComponent implements OnInit {

  constructor(private hackerService: HackerService) { }

  ngOnInit() {
  }
  submitForm(alias: string, skill: string, description: string) {
    var newHacker: Hacker = new Hacker(alias, skill, description);
    this.hackerService.addHacker(newHacker);
  }

}
