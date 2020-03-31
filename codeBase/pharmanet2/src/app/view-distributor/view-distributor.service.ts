
import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { Distributor } from '../org.hyperledger_composer.scms';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class ViewDistributorService {

  private NAMESPACE = 'Distributor';

  constructor(private dataService: DataService<Distributor>) {
  };

  public getAll(): Observable<Distributor[]> {
    return this.dataService.getAll(this.NAMESPACE);
  }

  public getparticipant(id: any): Observable<Distributor> {
    return this.dataService.getSingle(this.NAMESPACE, id);
  }

}
