import { Component } from "@angular/core";

@Component({
  selector: "lib-c",
  template: `
    <h1>{{ title }}</h1>
  `
})
export class LibCComponent {
  title = "Lib C is here";
}
