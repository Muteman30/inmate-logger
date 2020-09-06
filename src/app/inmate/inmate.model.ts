import { prisonLocation } from './location.model';

export class Inmate{
    id:string;
    name:string;
    dateOfBirth:Date;
    cellNumber:number;
    entryDate:Date;
    locations:prisonLocation[];
    currentLocationName:string;
    constructor(
        id:string,
        name:string,
        dateOfBirth:Date,
        cellNumber:number,
        entryDate:Date,
        locations:prisonLocation[],
        currentLocationName:string,
    ){
        this.id = id;
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.cellNumber = cellNumber;
        this.entryDate = entryDate;
        this.locations = locations;
        this.currentLocationName = currentLocationName;
    }
}