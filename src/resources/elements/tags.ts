import {bindable} from 'aurelia-templating';
import {inject} from 'aurelia-dependency-injection';
import {Topics} from './../../models/topics';

@inject(Topics)
export class TagsCustomElement {

  @bindable()
  public tags: string[];

  constructor(public topics: Topics) { }
}
