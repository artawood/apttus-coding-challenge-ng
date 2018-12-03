import { Component, OnInit, Input } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

@Component({
  selector: "app-search-result",
  templateUrl: "./search-result.component.html",
  styleUrls: ["./search-result.component.css"]
})
export class SearchResultComponent implements OnInit {
  @Input() input: string = "";
  data: Object;
  constructor(private http: HttpClient) {}

  ngOnInit() {}

  search() {
    let params = new HttpParams().set("q", this.input);
    params.append("q", this.input);
    this.http
      .get("https://api.github.com/search/repositories", {
        params: params
      })
      .subscribe(res => {
        this.data = res;
      });
    console.log(this.data);
  }
}
