import {Person} from './../models/person';
export class Topics {

  public From(people: Person[]) {
    
    const list = [];
    people
      .map(i => i.topics)
      .forEach(t => list.push(...t));

    for(const item of list) {
      if (this[item]) {
        this[item] += 1;
      } else {
        this[item] = 1;
      }
    }
  }  
}
