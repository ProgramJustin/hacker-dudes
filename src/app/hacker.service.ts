import { Injectable } from '@angular/core';
import { Hacker } from './hacker.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class HackerService {

  hackers: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.hackers = database.list('hackers');
  }

  getHackers() {
  return this.hackers;
  }

  addHacker(newHackers: Hacker) {
    this.hackers.push(newHackers);
  }

  getHackerById(hackerId: string){
    return this.database.object('hackers/' + hackerId);
 }

 updateHacker(localUpdatedHacker){
    var hackerEntryInFirebase = this.getHackerById(localUpdatedHacker.$key);
    hackerEntryInFirebase.update({title: localUpdatedHacker.title,
                                artist: localUpdatedHacker.artist,
                                description: localUpdatedHacker.description});
  }

  deleteHacker(localHackerToDelete){
    var hackerEntryInFirebase = this.getHackerById(localHackerToDelete.$key);
    hackerEntryInFirebase.remove();
  }

}
