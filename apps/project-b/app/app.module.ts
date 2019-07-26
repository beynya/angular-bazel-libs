import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { LibBModule } from "@my/lib-b";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LibBModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
