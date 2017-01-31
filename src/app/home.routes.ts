import {RouterModule} from '@angular/router';
import {HomeComponent} from './home.component';
import {SelectedComponent} from './selected.component';

const routes = [
  {path:'',component:HomeComponent},
  {path:':id',component:SelectedComponent}
]

export default RouterModule.forChild(routes);
