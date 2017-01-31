import { Injectable } from '@angular/core';
import { Http,Response} from '@angular/http';
import { Tabs } from '../models/tabs'
import {Observable} from 'rxjs/Rx';
@Injectable()
export class SampleService {

  indexOffset = 0;

  /*categories = [
    {tab:'Sample 1',title:'Sample 1',content:'app/samples/img/lms-1.png'},
    {tab:'Sample 2',title:'Sample 2',content:'app/samples/img/lms-2.png'},
    {tab:'Sample 3',title:'Sample 3',content:'app/samples/img/lms-3.png'},
    {tab:'Sample 4',title:'Sample 4',content:'app/samples/img/lms-4.png'}
  ];*/

  constructor(private http:Http) { }

  private samplesUrl = 'http://localhost:8080/api/samples';

  public categories;

  getTabData() : Observable<Tabs[]> {
    return this.http.get(this.samplesUrl)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
