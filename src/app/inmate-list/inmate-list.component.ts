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

  sortOpts={
    prop:'name',
    asc:true
  }

  constructor() {
    
  }

  ngOnInit(): void {
    
  }

  onSelectInmate(inmate:Inmate){
    this.chosenInmate.emit(inmate);
  }

  createNewInmate(){
    var inmLocation = new prisonLocation('New Processing', new Date());
    let newInmate = new Inmate('new', '', new Date(), 0, new Date(), [inmLocation], inmLocation.name);
    this.chosenInmate.emit(newInmate);
  }

  onResortInmates(propName:string){
    if(this.sortOpts.prop == propName){
      this.sortOpts.asc = !this.sortOpts.asc;
    } else {
      this.sortOpts.asc = true;
    }

    this.sortOpts.prop = propName;
  }

  sortInmates(){  
    return this.inmates.sort((a:Inmate, b:Inmate):number=>{
      if((this.sortOpts.asc && a[this.sortOpts.prop] > b[this.sortOpts.prop]) || (!this.sortOpts.asc && a[this.sortOpts.prop] < b[this.sortOpts.prop]) ){
        return 1;
      } else if((this.sortOpts.asc && a[this.sortOpts.prop] < b[this.sortOpts.prop]) || (!this.sortOpts.asc && a[this.sortOpts.prop] > b[this.sortOpts.prop]) ){
        return -1;
      }
      return 0;
    })
  }
}