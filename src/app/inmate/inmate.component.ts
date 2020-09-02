import { Inmate } from './inmate.model';
import { Component, OnInit, Input, DoCheck, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inmate',
  templateUrl: './inmate.component.html',
  styleUrls: ['./inmate.component.css']
})
export class InmateComponent implements OnInit {
  @Input() inmate:Inmate;
  @Output() clearSelected = new EventEmitter<boolean>();
  @Output() saveInmate = new EventEmitter<Inmate>();
  @Output() deleteInmate = new EventEmitter<string>();
  constructor() {

  }

  ngOnInit(): void {
  }
  
  dobChange(value:string){
    //console.log(value);
    this.inmate.dateOfBirth = new Date(value);
    console.log(this.inmate)
  }
  onBackToInmates(){
    this.clearSelected.emit(true);
  }

  onSaveInmate(){
    if(this.inmate.name == ''){
      alert('You have not filled in the inmates name, please maek suer all fields are correct.');
    } else {
      console.log(this.inmate)
      this.saveInmate.emit(this.inmate);
      this.onBackToInmates();
    }
    
  }
  onDeleteInmate(){
    if(confirm('You are about to delete Inmate ' + this.inmate.name)){
      this.deleteInmate.emit(this.inmate.id);
      this.onBackToInmates();
    }
    
  }
}
