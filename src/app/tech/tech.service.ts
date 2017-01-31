import { Injectable } from '@angular/core';
import { Http,Response} from '@angular/http';
import { Tabs } from '../models/tabs'
import { Categories } from '../models/categories'
import {Observable} from 'rxjs/Rx';

@Injectable()
export class TechService {

  constructor(private http:Http) { }

  private techUrl = 'http://localhost:8080/api/tech';

  public categories;

  getTabData() : Observable<Tabs[]> {
    return this.http.get(this.techUrl)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
