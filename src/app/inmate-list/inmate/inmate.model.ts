import { Location } from './location.model';

export class Inmate{
    id:string;
    name:string;
    dateOfBirth:Date;
    cellNumber:number;
    entryDate:Date;
    currentLocation:Location;
    constructor(
        id:string,
        name:string,
        dateOfBirth:Date,
        cellNumber:number,
        entryDate:Date,
        currentLocation:Location,
    ){
        this.id = id;
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.cellNumber = cellNumber;
        this.entryDate = entryDate;
        this.currentLocation = currentLocation;
    }
}