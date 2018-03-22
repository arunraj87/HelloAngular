import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const credentials = [
      { userName: 'admin', password: 'admin' },
      { userName: 'gunner', password: 'gunner' },
      { userName: 'sachin', password: 'sachin' },
      { userName: 'admin', password: 'admin1' }
    ];
    const usersDetails = [
      { firstName: 'Admin', lastName: 'Admin', userName: 'admin', password: 'admin' },
      { firstName: 'Gunner', lastName: 'Gunner', userName: 'gunner', password: 'gunner' },
      { firstName: 'Sachin', lastName: 'Tendulkar', userName: 'sachin', password: 'sachin' }
    ];
    const sampleURLS = [
      { linkName: 'Thierry Henry (King Henry)', link: 'https://en.wikipedia.org/wiki/Thierry_Henry' },
      { userName: 'gunner', password: 'gunner' },
      { userName: 'sachin', password: 'sachin' },
      { userName: 'admin', password: 'admin1' }
    ];
    return {credentials, usersDetails};
  }
}
