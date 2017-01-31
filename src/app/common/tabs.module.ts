import {NgModule} from "@angular/core";
import {TabsComponent} from "./tabs.component";
import {CommonModule} from "@angular/common";
import tabsRoutes from './tabs.routes';


@NgModule({
  declarations: [TabsComponent],
  imports: [CommonModule,tabsRoutes],
  providers: [],
  exports: [TabsComponent]
})
export class TabsModule { }
