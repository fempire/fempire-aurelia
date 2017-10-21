import {autoinject} from 'aurelia-dependency-injection';

import {PeopleList} from 'models/peopleList';

@autoinject()
export class All {

  public peopleList: PeopleList = [];

  constructor(peopleList: PeopleList) {
    this.peopleList = peopleList
      .sort((x, y) => x.name.localeCompare(y.name));
  }
}
