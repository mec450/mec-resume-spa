import { Injectable } from '@angular/core';
import { Http,Response} from '@angular/http';
import { Overview } from '../models/overview'
import { Observable } from 'rxjs/Rx';

@Injectable()
export class MeService {

  constructor(private http:Http) { }

  private meUrl = 'http://localhost:8080/api/mec';

  public categories;

  private Mec : {id: string, tabs: string, overview: string}[];

  getOverviewData() : Observable<Overview[]> {
    return this.http.get(this.meUrl)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
