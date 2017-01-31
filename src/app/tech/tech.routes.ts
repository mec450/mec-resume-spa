import {RouterModule} from '@angular/router';
import {DetailsComponent} from './details.component';

const routes = [
  { path: 'tech', component: DetailsComponent }
];

export default RouterModule.forChild(routes);
