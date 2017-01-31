import { Component, Input, Output, EventEmitter } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import "rxjs/add/operator/map";
import {Location} from '@angular/common';
import {Router} from '@angular/router'
@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})

export class TabsComponent {
  @Input() categories;
  @Input() selectedTab;
  @Input() selectedImg;
  @Input() viewIndex;
  @Input() viewType;
  @Output() expandImage = new EventEmitter();
  private id : string;
  public routes : string;
  private imgSize = 'standard';

  private ngOnInit() {
    this.route.params.subscribe(params => {
    });
  }

  private ngOnChanges() {
    if(this.categories){
      console.log('SELECTED TAB = ' , this.selectedTab);
      console.log('CATEGORIES = ' , this.categories);
      console.log('CATEGORIES.length = ' , this.categories[0]);
    }
  }

  onTabClick(tabIndex,viewIndex){
    let urlId = this.route.params['_value'].id;
    if(!urlId){
      urlId = '0000';
    }
    urlId = '/'+urlId.substr(0, viewIndex) + tabIndex + urlId.substr(viewIndex + 1);
    this.router.navigateByUrl(urlId);
  }

  private onImgClick() {
    if(this.imgSize !== 'enlarge'){
      this.imgSize = 'enlarge';
    } else {
      this.imgSize = 'standard';
    }
    this.expandImage.emit({
      viewType: this.imgSize
    })
  }

  constructor(private router:Router, private route:ActivatedRoute){
  }
}
