import { Component } from "@angular/core";

@Component({
  selector: "lib-a",
  template: `
    <h1>{{ title }}</h1>
    <p>Lib C should be below</p>
    <lib-c></lib-c>
  `
})
export class LibAComponent {
  title = "Lib A ";
}
