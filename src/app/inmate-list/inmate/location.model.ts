export class Location{
    public name:string;
    public datetime:Date;
    constructor(location:string, datetime:Date){
        this.name = location;
        this.datetime = datetime;
    }
}