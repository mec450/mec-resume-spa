import { Injectable } from '@angular/core';
import { Http,Response} from '@angular/http';
import { Tabs } from '../models/tabs'
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ExperienceService {

  constructor(private http:Http) { }

  private experienceUrl = 'http://localhost:8080/api/experience';

  private Tabs : {title: string, content: string}[];

  public categories;

  getTabData() : Observable<Tabs[]> {
    return this.http.get(this.experienceUrl)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
