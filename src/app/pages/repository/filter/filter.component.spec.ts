import { ComponentFixture, TestBed } from "@angular/core/testing";

import { FilterComponent } from "./filter.component";
import {GithubService} from "../services/github.service";
import {HttpClientModule} from "@angular/common/http";
import {MatCheckboxModule} from "@angular/material/checkbox";

describe("FilterComponent", () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterComponent],
      providers: [GithubService],
      imports: [HttpClientModule, MatCheckboxModule]
    });
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
