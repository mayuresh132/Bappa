import { RightDataComponent } from './right-data/right-data.component';
import { Injectable } from '@angular/core';


@Injectable()
export class DataService {
Ganesh: any;
  constructor() {
this.Ganesh = [
{ID: 1, Src: 'abcd', Name : 'mayuresh', Status: 'i am Cool' },
{ID: 1, Src: 'abcd', Name : 'Sonali', Status: 'so beautifull' },
{ID: 1, Src: 'abcd', Name : 'Raj', Status: 'Good Morning' },
{ID: 1, Src: 'abcd', Name : 'Omakar', Status: 'Hello World' },
{ID: 1, Src: 'abcd', Name : 'Sharayu', Status: 'Hii Friends' },
{ID: 1, Src: 'abcd', Name : 'Smita', Status: 'hii Everyone' },
{ID: 1, Src: 'abcd', Name : 'Rushi', Status: 'Something is hpn' },
{ID: 1, Src: 'abcd', Name : 'Vaibhav', Status: 'Friends forever' },
{ID: 1, Src: 'abcd', Name : 'Madhuri', Status: 'Lay Bhari' },
{ID: 1, Src: 'abcd', Name : 'Manthan', Status: 'Ky Suchat Nahi' },
{ID: 1, Src: 'abcd', Name : 'Tanavi', Status: 'Sampal baba Ekdach' },
];

  }

  getdata() {
    return this.Ganesh;
  }
}
