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
    asc:true,
    filterVal:''
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

  onResortInmates(event, propName:string){
    if(this.sortOpts.prop == propName){
      this.sortOpts.asc = !this.sortOpts.asc;
    } else {
      this.sortOpts.asc = true;
    }

    var headerCols = event.target.parentElement.children;
    for(let header of headerCols){
      header.classList.remove('asc', 'desc', 'sorting-col');
    };

    event.target.classList.add(this.sortOpts.asc?'asc' : 'desc');
    
    this.sortOpts.prop = propName;

    event.target.classList.add('sorting-col');
  }

  onFilterInmates(event){
    this.sortOpts.filterVal = event.target.value;

  }

  sortInmates(){  
    return this.inmates.filter((inmate:Inmate)=>{
      return inmate.name.indexOf(this.sortOpts.filterVal) > -1 ||
      inmate.id.indexOf(this.sortOpts.filterVal) > -1 ||
      inmate.currentLocationName.indexOf(this.sortOpts.filterVal) > -1;
    }).sort((a:Inmate, b:Inmate):number=>{
      if((this.sortOpts.asc && a[this.sortOpts.prop] > b[this.sortOpts.prop]) || (!this.sortOpts.asc && a[this.sortOpts.prop] < b[this.sortOpts.prop]) ){
        return 1;
      } else if((this.sortOpts.asc && a[this.sortOpts.prop] < b[this.sortOpts.prop]) || (!this.sortOpts.asc && a[this.sortOpts.prop] > b[this.sortOpts.prop]) ){
        return -1;
      }
      return 0;
    });
  }
}