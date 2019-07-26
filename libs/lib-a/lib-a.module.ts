import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LibAComponent } from "./lib-a.component";
import { LibCModule } from "@my/lib-c";

@NgModule({
  imports: [CommonModule, LibCModule],
  declarations: [LibAComponent],
  exports: [LibAComponent]
})
export class LibAModule {}
