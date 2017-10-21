import {autoinject} from 'aurelia-dependency-injection';
import {bindable} from 'aurelia-templating';

import {Person} from 'models/person';
import {PeopleList} from 'models/peopleList';

@autoinject()
export class Topic {

  public topic: string = '';
  public filteredPeople: Person[] = [];

  constructor(private peopleList: PeopleList) {}

  public activate(params) {
    this.topic = params.topic;
    this.filteredPeople = this.peopleList
      .filter(p => p.topics.indexOf(this.topic) > -1)
      .sort((x, y) => x.name.localeCompare(y.name));
  }
}
