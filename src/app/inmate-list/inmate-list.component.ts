import { prisonLocation } from '../inmate/location.model';
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Inmate} from '../inmate/inmate.model'
@Component({
  selector: 'app-inmate-list',
  templateUrl: './inmate-list.component.html',
  styleUrls: ['./inmate-list.component.css']
})
export class InmateListComponent implements OnInit {
  @Input('inmate-list') inmates:Inmate[];
  @Output() chosenInmate = new EventEmitter<Inmate>();
  constructor() {
    
  }

  ngOnInit(): void {
    
  }
  onSelectInmate(inmate:Inmate){
    this.chosenInmate.emit(inmate);
  }

  createNewInmate(){
    var currLocation = new prisonLocation('New Processing', new Date());
    let newInmate = new Inmate('', '', new Date(), 0, new Date(), [currLocation], currLocation);
    this.chosenInmate.emit(newInmate);
  }
}
