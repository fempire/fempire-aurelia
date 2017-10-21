export class AwesomeListParser {
  
  public parse(text) {
    const people = [];
    
    const interestedInRegex = /^## (.*)\s(((?!^## ).*|\s)*)/gm;
    const personRegex = /##### (.*)((\s(?!#).*)*)/g;
    const linkRegex = /^- (\[(.*)\]\((.*)\))$/gm;
    const infoRegex = /^- (.*) - (.*)$/gm;

    let match;
    while (match = interestedInRegex.exec(text)) {
      const type = match[1];
      const peopleText = match[2];
      
      let personSectionMatch;
      while (personSectionMatch = personRegex.exec(peopleText)) {
        const fullName = personSectionMatch[1];
        if (fullName === 'Full Name (First, Last)') {

          continue;
        }

        const person: ParsedPerson = {
          name: fullName,
          links: [],
          topics: [],
          location: undefined,
          type: type
        };

        const description = personSectionMatch[2] as string;

        let linkMatch;
        while (linkMatch = linkRegex.exec(description)) {
          const title = linkMatch[2];
          const link = linkMatch[3];
          person.links.push({ title, link });
        }
        
        let infoMatch;
        while (infoMatch = infoRegex.exec(description)) {
          const property = infoMatch[1] as string;
          const value = infoMatch[2] as string;
          
          if (property.toLowerCase() === 'topics') {
            const topics = value.split(',').map(i => i.trim().toLowerCase());
            if (topics) {
              person.topics.push(...topics);
            }
            continue;
          }

          if (property.toLowerCase() === 'location') {
            person.location = value;
          }
        }           

        people.push(person);
      }
    }
    return people;    
  }
}

export class ParsedPerson {
  name: string;
  links: ParsedLink[];
  topics: string[];
  location: string;
  type: string;
}

export class ParsedLink {
  title: string;
  link: string;
}
