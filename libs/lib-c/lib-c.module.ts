import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LibCComponent } from "./lib-c.component";

@NgModule({
  imports: [CommonModule],
  declarations: [LibCComponent],
  exports: [LibCComponent]
})
export class LibCModule {}
