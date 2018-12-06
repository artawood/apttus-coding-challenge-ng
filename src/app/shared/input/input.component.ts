import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.css"]
})
export class InputComponent implements OnInit {
  @Output() input = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  // searchRepo(query) {
  //   this.input.emit(query);
  // }
}
