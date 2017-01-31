import { Component } from '@angular/core';
import { TechService } from './tech/tech.service';
import { MeService } from './me/me.service';
import { PlansService } from './plans/plans.service';
import { TestService } from './test/test.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent {
  private displaySample = 'show';
  constructor(private tech:TechService,private me:MeService,private plans:PlansService,private test:TestService,private route:ActivatedRoute){
  }

  onDisplaySample(event) {
    console.log('HIDE COMPONENT BY EMIT = ' , event);
    this.displaySample = (event.viewType === 'enlarge') ? 'hide' : 'show';
  }
}
