import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Link } from './link';

export class LinkData implements InMemoryDbService {

    createDb() {
      const products: Link[] = [
        {
          id: 1,
          name: 'Marcel Blog',
          url: 'http://marcelbrunel.com/'
        },
        {
          id: 2,
          name: 'Marcel Twitter',
          url: 'https://twitter.com/MarcelBrunel'
        },
        {
          id: 5,
          name: 'Marcel Facebook',
          url: 'https://www.facebook.com/marcel.brunel.1'
        },
        {
          id: 8,
          name: 'Marcel Linkedin',
          url: 'https://www.linkedin.com/in/marcelbrunel/'
        },
        {
          id: 10,
          name: 'Police Chief White Papers',
          url: '../assets/articles/PoliceChief-WhitePaper-Final.pdf'
        },
        {
            id: 12,
            name: 'Marcel Brunel Bio',
            url: '../assets/articles/Marcel Lumina Bio - 2018.pdf'
        },
        {
            id: 19,
            name: 'MBA Capstone PTSD Paper',
            url: '../assets/articles/PTSD MBA Paper 2019.pdf'
        },
        {
            id: 17,
            name: 'Lumina Spark Virtual Debrief',
            url: 'https://www.dropbox.com/s/wlm7eg6hzvd3hvp/Lumina%20Spark%20Overview%20June%2025%202015-2.mp4?dl=0'
        }
      ];
      return { products };
    }
  }