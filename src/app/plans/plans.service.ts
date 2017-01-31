import { Injectable } from '@angular/core';
import { Http,Response} from '@angular/http';
import { Overview } from '../models/overview'
import { Observable } from 'rxjs/Rx';

@Injectable()
export class PlansService {

  constructor(private http:Http) { }

  private meUrl = 'http://localhost:8080/api/plans';

  public categories;

  getPlansData() : Observable<Overview[]> {
    return this.http.get(this.meUrl)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
