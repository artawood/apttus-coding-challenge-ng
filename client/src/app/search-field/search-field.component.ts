import { Component, OnInit, Input } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-search-field",
  templateUrl: "./search-field.component.html",
  styleUrls: ["./search-field.component.css"]
})
export class SearchFieldComponent implements OnInit {
  form: FormGroup;

  title = "search";

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      search: ""
    });
  }
  ngOnInit() {}

  onSubmit() {
    console.log(this.form.value);
  }
}
