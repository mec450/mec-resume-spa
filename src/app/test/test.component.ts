import { Component } from '@angular/core';
import { TestService } from './test.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/scan';
import {Subject} from "rxjs";
@Component({
  selector: 'test',
  templateUrl: 'test.component.html',
  styleUrls: ['test.component.css']
})
export class TestComponent {
  clock = Observable.interval(1000)
          .map(()=> new Date());
  click$ = new Subject();
  timer;
  calendar;
  onClick(){
    console.log('CLICKED');
  }
  fname = 'Martin';

  constructor(private test:TestService){
    this.timer = this.click$.map(() => new Date());
    /*this.clock = Observable.merge(
      this.click$,
      Observable.interval(500)
    ).map(() => new Date());*/
    this.clock = Observable.merge(
      //this.click$,
      this.click$.mapTo('hour'),
      //Observable.interval(1000)
      Observable.interval(1000).mapTo('second')
    )
      .startWith(new Date())
      .scan((acc,curr) => {
        const date = new Date(acc.getTime());
        //date.setSeconds(date.getSeconds() + 1);
        if(curr == 'second'){
          date.setSeconds(date.getSeconds() + 1);
        }
        if(curr == 'hour'){
          date.setHours(date.getHours() + 1);
        }
        return date;
    });

  }
}
