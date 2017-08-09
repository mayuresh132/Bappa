import { RightDataComponent } from './right-data/right-data.component';
import { Injectable } from '@angular/core';


@Injectable()
export class DataService {
Ganesh: any;
  constructor() {
this.Ganesh = [
{ID: 1, Src: 'abcd', Name : 'mayuresh', Status: 'Status1', value: 0 },
{ID: 1, Src: 'abcd', Name : 'Sonali', Status: 'Status2', value: 0},
{ID: 1, Src: 'abcd', Name : 'Raj', Status: 'Status3' , value: 1},
{ID: 1, Src: 'abcd', Name : 'Omakar', Status: 'Status4', value: 0 },
{ID: 1, Src: 'abcd', Name : 'Sharayu', Status: 'Status5', value: 1 },
{ID: 1, Src: 'abcd', Name : 'Smita', Status: 'Status6', value: 1 },
{ID: 1, Src: 'abcd', Name : 'Rushi', Status: 'Status7', value: 0 },
{ID: 1, Src: 'abcd', Name : 'Vaibhav', Status: 'Status8' , value: 1},
{ID: 1, Src: 'abcd', Name : 'Madhuri', Status: 'status9', value: 0 },
{ID: 1, Src: 'abcd', Name : 'Manthan', Status: 'Status10', value: 1 },
{ID: 1, Src: 'abcd', Name : 'Tanavi', Status: 'Status11', value: 0 },
];

  }
/*
  getdata() {
    return this.Ganesh;
  }*/

  filterItems(searchTerm) {

        return this.Ganesh.filter((item) => {
            return item.Name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });

    }
}
