import { prisonLocation } from './inmate/location.model';
import { Inmate } from './inmate/inmate.model';
import { Component, Output, DoCheck } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*application requirements:
  inmate details:
  - Name
  -Date of birth
  -Prison cell number
  -Date/time of intake
  -Location history within the prison
  Whilst Editing Admins need to be able to track inmate history
  A dashboard showing table of inmates
  Create a New Inmate
  Edit Existing Inmate
  Delete Inmate
  clicking Inmate from dashboard view Location History

  */
  inmates:Inmate[] = [];
  selectedInmate:Inmate;

  constructor(){
    //seed in some Data to work with; I would never actually populate data this way and use ajax requests to a server storing details in a SQL Database
    let firstNames = ['Simon', 'Andrew', 'James', 'John', 'Philip', 'Thaddeus', 'Bartholomew', 'Thomas', 'Matthew', 'Mark', 'Luke', 'John', 'Judas'];
    var possLocs = ['Canteen', 'Yard', 'Library', 'In Cell', 'Gym']; 
    for(let i=0; i<firstNames.length; i++){
      //give each prisoner a DOB
      var randBday = new Date(
        Math.floor(Math.random()*30)+1970,
        Math.floor(Math.random()*12),
        Math.floor(Math.random()*28)+1);
        //give each prisoner an incarceration date
      var randIncarDate = new Date(
        Math.floor(Math.random()*10)+2009,
        Math.floor(Math.random()*12),
        Math.floor(Math.random()*28)+1);
      
      //this is the 
      var now = new Date();
      let currLocDateTime = new Date(now.getTime() - Math.floor(Math.random()*1000*60) );
      let inmLocation = new prisonLocation(possLocs[Math.floor(Math.random()*possLocs.length)], currLocDateTime);
      let pastLocations:prisonLocation[] = [inmLocation];
      for(let j=0; j<50; j++){
        
        var pastLocDateTime = new Date(now.getTime() - (1000*60*j*5));
        pastLocations.push(
          new prisonLocation(possLocs[Math.floor(Math.random()*possLocs.length)],
          pastLocDateTime)
          );
      }

      this.inmates.push(new Inmate(
        i.toString(), //prisoner ID
        firstNames[i], //prisonerName
        randBday,  //prisoner DOB
        Math.floor(Math.random()*400), //cell Number
        randIncarDate, //incarceration Date
        pastLocations, //past Location array
        inmLocation.name
      ))
    }
  }

  onSelectedInmate(inmate:Inmate){
    console.log('Selected Inmate changed to: '+inmate.name)
    this.selectedInmate = inmate;
  }

  onClearedSelected(shouldClear:boolean){
    if(shouldClear){
      this.selectedInmate = undefined;
    }
  }

  onSavedInmate(updatedInmate:Inmate){
    if(updatedInmate.id=='new'){
      updatedInmate.id = this.inmates.length.toString();
      this.inmates.push(updatedInmate)
    }else {
      for(var i=0; i<this.inmates.length; i++){
        if(this.inmates[i].id == updatedInmate.id){
          this.inmates[i] = updatedInmate;
          break;
        }
      }
    }

  }

  onDeletedInmate(deletedId:string){
    for(var i=0; i<this.inmates.length; i++){
      if(this.inmates[i].id == deletedId){
        this.inmates.splice(i, 1);
        break;
      }
    }
  }
}
