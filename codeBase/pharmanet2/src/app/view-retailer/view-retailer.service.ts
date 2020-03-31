
import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { Retailer } from '../org.hyperledger_composer.scms';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class ViewRetailerService {

  private NAMESPACE = 'Retailer';

  constructor(private dataService: DataService<Retailer>) {
  };

  public getAll(): Observable<Retailer[]> {
    return this.dataService.getAll(this.NAMESPACE);
  }

  public getparticipant(id: any): Observable<Retailer> {
    return this.dataService.getSingle(this.NAMESPACE, id);
  }

}
