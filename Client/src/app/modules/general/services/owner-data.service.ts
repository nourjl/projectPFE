import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class OwnerDataService {
    constructor() { }
    //Using any
    public owner: any = null;
    public subject = new Subject();
    private ownerDataSource = new BehaviorSubject(this.owner);
    currentOwner = this.ownerDataSource.asObservable();

    // changeOwner
    setOwner(owner: any) {
        this.ownerDataSource.next(owner);
    }
}