import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TestComponent} from "./test.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [TestComponent],
  imports: [CommonModule,FormsModule],
  providers: [],
  exports: [TestComponent]
})
export class TestModule { }
