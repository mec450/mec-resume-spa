import { Component } from '@angular/core';
import { FooterService } from './footer.service';
import {ActivatedRoute} from '@angular/router';
import{Router} from '@angular/router';
import { Categories } from '../models/categories'

@Component({
  selector: 'footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.css']
})

export class FooterComponent {
  private sub;
  private selectedTab;
  public categories: Array<Categories>;

  constructor(private footer:FooterService,private router:Router,private route:ActivatedRoute){
    let testRet = footer.getTabData();
    testRet.subscribe(x => {
      footer.categories = x[0]['tabs'];
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
