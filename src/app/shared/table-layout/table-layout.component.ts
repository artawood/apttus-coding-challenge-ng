import { Component, OnInit, Input } from "@angular/core";
import { GitHubData } from "../../git-hub-data";

@Component({
  selector: "app-table-layout",
  templateUrl: "./table-layout.component.html",
  styleUrls: ["./table-layout.component.css"]
})
export class TableLayoutComponent implements OnInit {
  @Input("data") data: GitHubData;
  constructor() {}

  ngOnInit() {}
}
