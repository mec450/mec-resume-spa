import {RouterModule} from '@angular/router';

const routes = [
  {path:'',loadChildren:'app/home.module.ts'},
]

export default RouterModule.forRoot(routes, {useHash:true});
