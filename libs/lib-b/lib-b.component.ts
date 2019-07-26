import { Component } from "@angular/core";

@Component({
  selector: "lib-b",
  template: `
    <h1>{{ title }}</h1>
  `
})
export class LibBComponent {
  title = "Lib B";
}
