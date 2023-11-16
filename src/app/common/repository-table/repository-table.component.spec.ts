import {ComponentFixture, TestBed} from "@angular/core/testing";
import { RepositoryTableComponent } from "./repository-table.component";
import {RepositoryModel} from "../../models/repository-model";
import {MatTableModule} from "@angular/material/table";

const DATA_SOURCE_MOCK: RepositoryModel[] = [
  {id: 1, name: "test", description: "just a quick test", language: "C#", html_url: "https://www.google.cz", stargazers_count: 10, isFav: false}
];

describe("RepositoryTableComponent", () => {
  let component: RepositoryTableComponent;
  let fixture: ComponentFixture<RepositoryTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepositoryTableComponent],
      imports: [MatTableModule]
    }).compileComponents();
    fixture = TestBed.createComponent(RepositoryTableComponent);
    component = fixture.componentInstance;
    component.dataSource = DATA_SOURCE_MOCK;
    fixture.detectChanges();
  });

    it("should create", () => {
      expect(component).toBeTruthy();
    });
});
