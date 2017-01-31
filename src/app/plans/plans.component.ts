import { Component } from '@angular/core';
import { PlansService } from './plans.service';
@Component({
  selector: 'plans',
  templateUrl: 'plans.component.html',
  styleUrls: ['plans.component.css']
})
export class PlansComponent {
  private plan;
  constructor(private plans:PlansService){
    let testRet = plans.getPlansData();
    testRet.subscribe(x => {
      this.plan = x[0];
      return x;
    }, e => console.error('OBSERVE ERROR = ' , e));
  }
}
