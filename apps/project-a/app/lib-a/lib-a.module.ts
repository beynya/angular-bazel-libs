import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LibAModule, LibAComponent } from "@my/lib-a";

@NgModule({
  imports: [
    LibAModule,
    RouterModule.forChild([{ path: "", component: LibAComponent, pathMatch: "full" }])
  ]
})
export class LibAProjectAModule {}
