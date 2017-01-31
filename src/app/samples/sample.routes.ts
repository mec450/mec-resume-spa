import {RouterModule} from '@angular/router';
import {DetailsComponent} from './details.component';

const routes = [
  { path: 'sample', component: DetailsComponent }
]

export default RouterModule.forChild(routes);
