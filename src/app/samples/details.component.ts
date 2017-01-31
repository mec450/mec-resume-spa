import { Component } from '@angular/core';
import { SampleService } from './sample.service';
@Component({
  selector: 'sample-details',
  template: '<div>???</div>',
  styleUrls: ['./sample.component.css']
})
export class DetailsComponent {
  constructor(private sample:SampleService){

  }
}
