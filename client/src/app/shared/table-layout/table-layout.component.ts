import { Component, OnInit } from "@angular/core";
import { GitHubSearchResultService } from "../../git-hub-search-result.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-table-layout",
  templateUrl: "./table-layout.component.html",
  styleUrls: ["./table-layout.component.css"]
})
export class TableLayoutComponent implements OnInit {
  data: Object;
  constructor(
    private http: HttpClient,
    private searchResult: GitHubSearchResultService
  ) {}

  ngOnInit() {
    //test
    let obs = this.http.get(
      "https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc"
    );
    obs.subscribe(res => {
      this.data = res;
      console.log(res);
    });
  }
}
