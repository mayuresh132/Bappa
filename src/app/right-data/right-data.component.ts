import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-data',
  templateUrl: './right-data.component.html',
  styleUrls: ['./right-data.component.css']
})
export class RightDataComponent implements OnInit {
GnapatiData: any;
  constructor(public Data1: DataService) { }

  ngOnInit() {

    this.GnapatiData = this.Data1.getdata();
    console.log(this.GnapatiData);
  }

}
