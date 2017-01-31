import { Component } from '@angular/core';
import { TechService } from './tech/tech.service';
import { MeService } from './me/me.service';
import { PlansService } from './plans/plans.service';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'selected',
  templateUrl: './selected.component.html',
  styleUrls: ['./selected.component.css']
})
export class SelectedComponent {
  private displaySample = 'show';
  constructor(private tech:TechService,private me:MeService,private plans:PlansService,private route:ActivatedRoute){
    console.log('route = '  , route);
  }

  onDisplaySample(event) {
    console.log('HIDE COMPONENT BY EMIT = ' , event);
    this.displaySample = (event.viewType === 'enlarge') ? 'hide' : 'show';
  }
}
