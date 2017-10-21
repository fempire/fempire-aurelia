import {FrameworkConfiguration} from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    './elements/person/person.html',
    './elements/tags'
  ]);
}
