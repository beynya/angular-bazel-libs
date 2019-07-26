import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

export const routes: Routes = [
  {
    path: "lib-a",
    loadChildren: "./lib-a/lib-a.module#LibAProjectAModule"
  },
  // { path: "lib-a", loadChildren: "../lib-a/lib-a.module#LibAProjectAModule" },
  // {
  //   path: "lib-a",
  //   loadChildren: () =>
  //     import("../lib-a/lib-a.module.ngfactory").then((m) => m.LibAProjectAModuleNgFactory)
  // },
  {
    path: "",
    redirectTo: "",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
