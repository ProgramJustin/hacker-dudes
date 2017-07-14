import { Injectable } from '@angular/core';
import { Hacker } from './hacker.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class HackerService {
  hackers: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.hackers = database.list('hacker');
  }

  getHackers() {
  return this.hackers;
  }

  getHackerById(hackerId: string){
    return this.database.object('hackers/' + hackerId);

 }

}
