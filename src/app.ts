import {autoinject} from 'aurelia-dependency-injection';
import {HttpClient} from 'aurelia-fetch-client';
import {RouterConfiguration, Router} from 'aurelia-router';

import {AwesomeListParser} from './services/awesomelistParser';
import Routes from './routes';
import {Topics} from './models/topics';
import {Person} from './models/person';
import {PeopleList} from './models/peopleList';

@autoinject()
export class App {

  public router: Router;

  constructor(
    private http: HttpClient, 
    private topics: Topics,
    private peopleList: PeopleList) {
    
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('https://raw.githubusercontent.com/fempire/women-tech-speakers-organizers/master/');
    });
  }

  public configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Aurelia';
    config.map(<any>Routes);
    this.router = router;
  }

  public activate() {
    return this.http.fetch('README.md')
      .then(response => response.text())
      .then(text => {
        
        this.peopleList.push(...
          new AwesomeListParser()
          .parse(text)
          .map(i => Person.FromParsedObject(i)));

        this.topics.From(this.peopleList);
      });
  }
}
