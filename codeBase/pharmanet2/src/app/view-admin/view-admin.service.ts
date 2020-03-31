
import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { Admin } from '../org.hyperledger_composer.scms';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class ViewAdminService {

  private NAMESPACE = 'Admin';

  constructor(private dataService: DataService<Admin>) {
  };

  public getAll(): Observable<Admin[]> {
    return this.dataService.getAll(this.NAMESPACE);
  }

  public getparticipant(id: any): Observable<Admin> {
    return this.dataService.getSingle(this.NAMESPACE, id);
  }

  }

