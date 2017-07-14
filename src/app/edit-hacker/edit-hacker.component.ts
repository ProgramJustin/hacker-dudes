import { Component, Input, OnInit } from '@angular/core';
import { HackerService } from '../hacker.service';

@Component({
  selector: 'app-edit-hacker',
  templateUrl: './edit-hacker.component.html',
  styleUrls: ['./edit-hacker.component.css'],
  providers: [HackerService]
})
export class EditHackerComponent implements OnInit {
  @Input() selectedHacker;

  constructor(private hackerService: HackerService) { }

  beginUpdatingHacker(hackerToUpdate){
    this.hackerService.updateHacker(hackerToUpdate);
  }

  ngOnInit() {
  }

}
