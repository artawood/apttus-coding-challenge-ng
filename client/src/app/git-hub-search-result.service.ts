import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class GitHubSearchResultService {
  data: Object;
  input: string;
  constructor(private http: HttpClient) {}

  getGitRepo() {
    let params = new HttpParams().set("q", this.input);
    params.append("q", this.input);
    this.http
      .get("https://api.github.com/search/repositories", {
        params: params
      })
      .subscribe(res => {
        this.data = res;
      });
  }
}
