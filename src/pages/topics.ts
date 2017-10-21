import {bindable} from 'aurelia-templating';
import {autoinject} from 'aurelia-dependency-injection';
import {Topics} from 'models/topics';

@autoinject()
export class TopicsCustomElement {

  public topics: Topic[] = [];

  constructor(topics: Topics) {
    for (const item in topics) {
      if (item === 'From') {
        continue;
      }
      this.topics.push(new Topic(item, topics[item]));
    }
    this.topics.sort((x, y) => x.title.localeCompare(y.title));
  }
}

class Topic {
  constructor(public title, public count) { }
}
