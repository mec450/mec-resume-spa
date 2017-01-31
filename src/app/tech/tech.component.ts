import { Component } from '@angular/core';
import { TechService } from './tech.service';
import {ActivatedRoute} from '@angular/router';
import{Router} from '@angular/router';
import { Categories } from '../models/categories'

@Component({
  selector: 'technology',
  templateUrl: 'tech.component.html',
   styleUrls: ['tech.component.css']
})

export class TechComponent {
  private sub;
  private selectedTab;
  public categories: Array<Categories>;

  constructor(private tech:TechService,private router:Router,private route:ActivatedRoute){
    let testRet = tech.getTabData();
    testRet.subscribe(x => {
      tech.categories = x[0]['tabs'];
      return x;
    }, e => console.error('OBSERVE ERROR = ' , e));
  }

  private ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = this.route.params['_value'].id;
      if(id) {
        id = id.charAt(0);
        this.selectedTab = id;
      } else {
        this.selectedTab = '0';
      }
    });
  }

  private ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
