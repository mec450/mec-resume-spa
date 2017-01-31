import { Component } from '@angular/core';
import { ExperienceService } from './experience.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Categories } from '../models/categories';

@Component({
  selector: 'experience',
  templateUrl: 'experience.component.html',
  styleUrls: ['experience.component.css']
})

export class ExperienceComponent {
  private sub;
  private selectedTab;
  public categories: Array<Categories>;

  constructor(private exp:ExperienceService,private router:Router,private route:ActivatedRoute){
    let testRet = exp.getTabData();
    testRet.subscribe(x => {
      exp.categories = x[0]['tabs'];
      return x;
    }, e => console.error('OBSERVE ERROR = ' , e));
  }

  private ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = this.route.params['_value'].id;
      if(id) {
        id = id.charAt(1);
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
