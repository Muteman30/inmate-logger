import { prisonLocation } from './location.model';

export class Inmate{
    id:string;
    name:string;
    dateOfBirth:Date;
    cellNumber:number;
    entryDate:Date;
    locations:prisonLocation[];
    currentLocation:prisonLocation;
    constructor(
        id:string,
        name:string,
        dateOfBirth:Date,
        cellNumber:number,
        entryDate:Date,
        locations:prisonLocation[],
        currentLocation:prisonLocation,
    ){
        this.id = id;
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.cellNumber = cellNumber;
        this.entryDate = entryDate;
        this.locations = locations;
        this.currentLocation = currentLocation;
    }
}