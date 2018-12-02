import { Component, OnInit } from "@angular/core";
import { GitHubSearchResultService } from "../../git-hub-search-result.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-table-layout",
  templateUrl: "./table-layout.component.html",
  styleUrls: ["./table-layout.component.css"]
})
export class TableLayoutComponent implements OnInit {
  results: any;
  constructor(
    private searchResult: GitHubSearchResultService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    //makes get request to github API on page load
    let obs = this.http.get(
      "https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc"
    );
    obs.subscribe(res => {
      let response = Object.keys(res);
      this.results = res;
      console.log(res);
      console.log(response);
    });
  }
}
