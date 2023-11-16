import { TestBed } from "@angular/core/testing";

import { GithubService } from "./github.service";
import { HttpClientModule} from "@angular/common/http";
import {GitHubAPIResponse} from "../../../models/repository-model";
import {Injectable, signal} from "@angular/core";

const GITHUB_DATA_MOCK = {
  total_count: 1,
  incomplete_results: false,
  items: [
    {id: 1, name: "test", description: "just a quick test", language: "C#", html_url: "https://www.google.cz", stargazers_count: 10, isFav: false},
    {id: 2, name: "test", description: "just a quick test", language: "C#", html_url: "https://www.google.cz", stargazers_count: 10, isFav: true}
  ]
};

@Injectable()
class MockGitHubService extends GithubService {
  override gitHubData = signal<GitHubAPIResponse>(GITHUB_DATA_MOCK);
  protected override originalGitHubData = GITHUB_DATA_MOCK;
}


describe("GithubService", () => {
  let service: GithubService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: GithubService, useClass: MockGitHubService}],
      imports: [HttpClientModule]
    });
    service = TestBed.inject(GithubService);
    localStorage.clear();
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should receive data", () => {
    service.getLatestPopularRepos();

    expect(service.gitHubData().items).not.toBeNull();
  });

  it("should add first to favourites", () => {
    service.toggleFav(1);

    expect(localStorage.getItem("1")).toBe("true");
  });

  it("should remove first from favourites", () => {
    service.toggleFav(1); //add
    service.toggleFav(1);

    expect(localStorage.getItem("1")).toBeNull();
  });

  it("should show only favourites", () => {
    service.toggleOnlyFav(true);

    expect(service.gitHubData().items).toEqual([
      {id: 2, name: "test", description: "just a quick test", language: "C#", html_url: "https://www.google.cz", stargazers_count: 10, isFav: true}
    ]);
  });
});
