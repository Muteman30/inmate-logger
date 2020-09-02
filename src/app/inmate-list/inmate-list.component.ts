import { Location } from './inmate/location.model';
import { Component, OnInit } from '@angular/core';
import {Inmate} from './inmate/inmate.model'
@Component({
  selector: 'app-inmate-list',
  templateUrl: './inmate-list.component.html',
  styleUrls: ['./inmate-list.component.css']
})
export class InmateListComponent implements OnInit {
  inmates:Inmate[] = [
    
  ];

  constructor() {
    //seed in some Data to work with;
    let firstNames = ['Simon', 'Andrew', 'James', 'John', 'Philip', 'Thaddeus', 'Bartholomew', 'Thomas', 'Matthew', 'Mark', 'Luke', 'John', 'Judas'];
    var possLocs = ['Canteen', 'Cell Block A', 'Cell Block B', 'Cell Block C', 'Yard', 'Library']; 
    for(let i=0; i<firstNames.length; i++){
      var randBday = new Date(
        Math.floor(Math.random()*30)+1970,
        Math.floor(Math.random()*12),
        Math.floor(Math.random()*28)+1);
      var randIncarDate = new Date(
        Math.floor(Math.random()*10)+2009,
        Math.floor(Math.random()*12),
        Math.floor(Math.random()*28)+1);
      var locDate = new Date();
      locDate = new Date(locDate.getTime() - Math.floor(Math.random()*1000*60*60) );
      this.inmates.push(new Inmate(i.toString(), firstNames[i], randBday, Math.floor(Math.random()*400), randIncarDate, {name:possLocs[Math.floor(Math.random()*possLocs.length)], datetime:locDate}))
    }
  }

  ngOnInit(): void {
    
  }

}
