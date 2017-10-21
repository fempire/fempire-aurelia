import {ParsedPerson} from './../services/awesomelistParser';

export class Person {

  public twitter: TwitterHandle;
  public githubLink: string;
  public location: string;
  public topics: string[];
  public links: Link[];

  constructor(public name: string, public type: string) {
  }

  static FromParsedObject(p: ParsedPerson) {
    const person = new Person(p.name, p.type);

    const twitterLink = p.links.find(l => l.link.indexOf('twitter.com') > -1);
    if (twitterLink) {
      person.twitter = new TwitterHandle(twitterLink.title, twitterLink.link);
      p.links.splice(p.links.indexOf(twitterLink), 1);
    }

    const githubLink = p.links.find(l => l.link.indexOf('github') > -1);
    if (githubLink) {
      person.githubLink = githubLink.link;
      p.links.splice(p.links.indexOf(githubLink), 1);
    }

    person.location = p.location;
    person.topics = p.topics;
    person.links = p.links.map(l => new Link(l.link, l.title));

    return person;
  }
}

export class TwitterHandle {
  constructor(public name: string, public link: string) {}
}

export class Link {
  constructor(public href, public title) {}
}
