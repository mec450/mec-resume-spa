import { Component } from '@angular/core';
import { ModalService } from './modal.service';
import {ActivatedRoute} from '@angular/router';
import{Router} from '@angular/router';
import { Categories } from '../models/categories'

@Component({
  selector: 'modal',
  templateUrl: 'modal.component.html',
  styleUrls: ['modal.component.css']
})

export class ModalComponent {
  private sub;
  private selectedTab;
  public categories: Array<Categories>;

  constructor(private modal:ModalService,private router:Router,private route:ActivatedRoute){
    let testRet = modal.getTabData();
    testRet.subscribe(x => {
      modal.categories = x[0]['tabs'];
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
