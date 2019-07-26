import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LibBComponent } from "./lib-b.component";

@NgModule({
  imports: [CommonModule],
  declarations: [LibBComponent],
  exports: [LibBComponent]
})
export class LibBModule {}
