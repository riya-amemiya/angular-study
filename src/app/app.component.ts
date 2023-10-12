import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "my-app-angular";
  items = [
    {
      name: "item 1",
      description: "description 1",
    },
    {
      name: "item 2",
      description: "description 2",
    },
    {
      name: "item 3",
      description: "description 3",
    },
  ];
}
