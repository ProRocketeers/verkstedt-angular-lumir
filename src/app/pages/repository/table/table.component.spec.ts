import { ComponentFixture, TestBed } from "@angular/core/testing";

import { TableComponent } from "./table.component";
import {GithubService} from "../services/github.service";
import {HttpClientModule} from "@angular/common/http";
import {FilterComponent} from "../filter/filter.component";
import {CommonModule} from "../../../common/common.module";
import {MatCheckboxModule} from "@angular/material/checkbox";

describe("TableComponent", () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableComponent, FilterComponent],
      providers: [GithubService],
      imports: [HttpClientModule, CommonModule, MatCheckboxModule]
    });
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
