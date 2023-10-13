import { Component } from "@angular/core";
import { Item } from "./item.interface";

@Component({
  selector: "app-items",
  templateUrl: "./items.component.html",
  styleUrls: ["./items.component.scss"],
})
export class ItemsComponent {
  items: Item[] = [
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
  clickedItem?: Item;
  onClick(item: Item) {
    if (this.clickedItem?.name === item.name) {
      this.clickedItem = undefined;
    } else {
      this.clickedItem = item;
    }
  }
}
