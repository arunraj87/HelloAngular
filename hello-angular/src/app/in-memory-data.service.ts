import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const credentials = [
      { id: 1, userName: 'admin', password: 'admin' },
      { id: 2, userName: 'gunner', password: 'gunner' },
      { id: 3, userName: 'sachin', password: 'sachin' }
    ];
    const usersDetails = [
      { id: 1, firstName: 'Admin', lastName: 'Admin', userName: 'admin', password: 'admin' },
      { id: 2, firstName: 'Gunner', lastName: 'Gunner', userName: 'gunner', password: 'gunner' },
      { id: 3, firstName: 'Sachin', lastName: 'Tendulkar', userName: 'sachin', password: 'sachin' }
    ];
    const sampleURLS = [
      { id: 1, linkName: 'Thierry Henry (King Henry)', link: 'https://en.wikipedia.org/wiki/Thierry_Henry' },
      { id: 2, linkName: 'Dennis Bergkamp (Non-flying Dutch Man)', link: 'https://en.wikipedia.org/wiki/Dennis_Bergkamp' },
      { id: 3, linkName: 'Robert Pirès (Super Rob)', link: 'https://en.wikipedia.org/wiki/Robert_Pir%C3%A8s' },
      { id: 4, linkName: 'One Arsène Wenger', link: 'https://en.wikipedia.org/wiki/Ars%C3%A8ne_Wenger' }
    ];
    return {credentials, usersDetails, sampleURLS};
  }
}
