import { Router } from 'aurelia-router';
import {autoinject} from 'aurelia-dependency-injection';

import {PeopleList} from 'models/peopleList';

@autoinject()
export class FilteredListOfPeople {

  public title: string;
  public people: PeopleList = [];

  constructor(private peopleList: PeopleList, private router: Router) {
  }

  public attached() {
    this.title = this.router.currentInstruction.config.title;
    this.people = this.peopleList
      .filter(p => p.type === this.title)
      .sort((x, y) => x.name.localeCompare(y.name));
  }
}
