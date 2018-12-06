import { Component, OnInit, Input } from "@angular/core";
import { GitHubData } from "../../git-hub-data";

@Component({
  selector: "app-table-layout",
  templateUrl: "./table-layout.component.html",
  styleUrls: ["./table-layout.component.css"]
})
export class TableLayoutComponent implements OnInit {
  @Input("data") data: GitHubData;
  sortId = null;
  sortValue = null;
  displayData = [];
  constructor() {}

  ngOnInit() {}

  sort(sort: { key: string; value: string }): void {
    this.sortId = sort.key;
    this.sortValue = sort.value;
    // this.search();
  }
  // search(): void {
  //   /** sort data **/
  //   if (this.sortId && this.sortValue) {
  //     this.displayData = data.sort((a, b) =>
  //       this.sortValue === "ascend"
  //         ? a[this.sortId] > b[this.sortId]
  //           ? 1
  //           : -1
  //         : b[this.sortId] > a[this.sortId]
  //         ? 1
  //         : -1
  //     );
  //   } else {
  //     this.displayData = data;
  //   }
  // }
}
