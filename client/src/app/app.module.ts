import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import en from "@angular/common/locales/en";
import { HttpClientModule } from "@angular/common/http";
import { NgZorroAntdModule, NZ_I18N, en_US } from "ng-zorro-antd";
import { registerLocaleData } from "@angular/common";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";

//Ng Bootstrap
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

//Components
import { AppComponent } from "./app.component";
import { JumbotronComponent } from "./jumbotron/jumbotron.component";
import { SearchFieldComponent } from "./search-field/search-field.component";
import { SearchResultComponent } from "./search-result/search-result.component";
//Shared Components
import { ButtonComponent } from "./shared/button/button.component";
import { InputComponent } from "./shared/input/input.component";
import { TableLayoutComponent } from "./shared/table-layout/table-layout.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    JumbotronComponent,
    ButtonComponent,
    InputComponent,
    SearchFieldComponent,
    TableLayoutComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule {}
