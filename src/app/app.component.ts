import { Component, NgModule, Input, Output } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { GitHubData } from "./git-hub-data";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "client";

  @Input("data") data: GitHubData;
  @Input("query") query: string;

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  search() {
    let params = new HttpParams().set("q", this.query);
    let obs = this.http.get<any>("https://api.github.com/search/repositories", {
      params: params
    });
    obs.subscribe(res => {
      this.data = res;
      console.log(res);
    });
    console.log(this.query);
  }
}
