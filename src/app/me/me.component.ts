import { Component } from '@angular/core';
import { MeService } from './me.service';
@Component({
  selector: 'me',
  templateUrl: 'me.component.html',
   styleUrls: ['me.component.css']
})
export class MeComponent {
  private mec;
  constructor(private me:MeService){
    let testRet = me.getOverviewData();
    testRet.subscribe(x => {
      this.mec = x[0];
      return x;
    }, e => console.error('OBSERVE ERROR = ' , e));
  }
}
