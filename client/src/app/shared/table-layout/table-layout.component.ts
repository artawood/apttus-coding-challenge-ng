import { Component, OnInit, Input } from "@angular/core";
import { GitHubSearchResultService } from "../../git-hub-search-result.service";

@Component({
  selector: "app-table-layout",
  templateUrl: "./table-layout.component.html",
  styleUrls: ["./table-layout.component.css"]
})
export class TableLayoutComponent implements OnInit {
  constructor(private searchResult: GitHubSearchResultService) {}

  ngOnInit() {}
}
