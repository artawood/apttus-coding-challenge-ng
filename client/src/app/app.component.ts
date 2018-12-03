import { Component, NgModule } from "@angular/core";
//TODO: import input, button, and table here

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
  //TODO: Add directives for input, button and table
})
export class AppComponent {
  //TODO: Declare data as object

  title = "client";

  //TODO: Add on submit function that takes the value from the input, and insert as params in the get method
  //Subscribe (aka promise) { response => data}
}
