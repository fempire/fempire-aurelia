export default [
  { 
    route: ['', 'all'], 
    name: 'all',
    moduleId: 'pages/all',
    nav: true, 
    title: 'Everyone'
  },
  {
    route: 'WomenTechSpeakers', 
    name: 'WomenTechSpeakers',
    moduleId: 'pages/filteredListOfPeople',
    activationStrategy: 'replace',
    nav: true, 
    title: 'Women Tech Speakers' 
  },   
  {
    route: 'WomenInterestedInGettingStarted', 
    name: 'WomenInterestedInGettingStarted',
    moduleId: 'pages/filteredListOfPeople',
    activationStrategy: 'replace',
    nav: true, 
    title: 'Women Interested In Getting Started / Getting Involved'
  }, 
  {
    route: 'PeopleInterestedInMentoringWomen', 
    name: 'PeopleInterestedInMentoringWomen',
    moduleId: 'pages/filteredListOfPeople',
    activationStrategy: 'replace',
    nav: true, 
    title: 'People Interested In Mentoring Women'
  },   
  { 
    route: 'topics',
    name: 'topics', 
    moduleId: 'pages/topics', 
    nav: true, 
    title: 'Topics' 
                        },
  { 
    route: 'topic/:topic', 
    name: 'topic',
    moduleId: 'pages/topic',
    nav: false, 
    title: 'Topic'
  }
];
