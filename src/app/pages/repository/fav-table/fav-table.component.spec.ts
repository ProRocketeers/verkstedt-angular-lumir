import { ComponentFixture, TestBed } from "@angular/core/testing";

import { FavTableComponent } from "./fav-table.component";
import {GithubService} from "../services/github.service";
import {HttpClientModule} from "@angular/common/http";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe("FavTableComponent", () => {
  let component: FavTableComponent;
  let fixture: ComponentFixture<FavTableComponent>;

  beforeEach(() => {
    const gitHubServiceSpy = jasmine.createSpyObj("GitHubService", ["gitHubData", "toggleOnlyFav"]);
    TestBed.configureTestingModule({
      declarations: [FavTableComponent],
      providers: [{provide: GithubService, useValue: gitHubServiceSpy}],
      imports: [HttpClientModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(FavTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
