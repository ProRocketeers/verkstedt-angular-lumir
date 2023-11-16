import {Injectable, signal} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {GitHubAPIResponse} from "../../../models/repository-model";
import {map} from "rxjs";

@Injectable()
export class GithubService {
  private readonly dateNow = new Date();
  private readonly lastWeek = new Date(this.dateNow.getFullYear(), this.dateNow.getMonth(), this.dateNow.getDate() - 7).toISOString();
  private readonly url = `https://api.github.com/search/repositories?q=created:>${this.lastWeek}&sort=stars&order=desc`;
  protected originalGitHubData: GitHubAPIResponse | null = null;

  public gitHubData = signal<GitHubAPIResponse | null>(null);

  constructor(private readonly httpClient: HttpClient) {
    this.getLatestPopularRepos();
  }

  public getLatestPopularRepos = () => {
    this.httpClient.get<GitHubAPIResponse>(this.url).pipe(map(response => ({
        ...response,
        items: response.items.map(item => {
          if(localStorage.getItem(item.id.toString())) {
            return {...item, isFav: true};
          }

          return {...item, isFav: false};
        })
      }))).subscribe({
      next: repos => {
        this.gitHubData.set(repos);
        this.originalGitHubData = repos;
      },
      error: err => {
        console.error(err);
        this.gitHubData.set(null);
      }
    });
  };

  public toggleFav = (id: number) => {
    if(localStorage.getItem(id.toString())) {
      localStorage.removeItem(id.toString());
      this.updateFav(id, false);
      return;
    }

    localStorage.setItem(id.toString(), "true");
    this.updateFav(id, true);
  };

  public toggleOnlyFav = (showFav: boolean) => this.gitHubData.update(() => {
    if(!showFav) {
      return this.originalGitHubData;
    }

    return {
      ...this.originalGitHubData,
      items: this.originalGitHubData.items.filter(item => item.isFav)
    };
  });

  private updateFav = (id: number, fav: boolean) => this.gitHubData.update(data => {
      const index = data.items.findIndex(item => item.id === id);
      const next = [...data.items];

      if(index  !== -1) {
        next[index] = {...next[index], isFav: fav};

        this.originalGitHubData = {...data, items: next};
        return {...data, items: next};
      }

      return data;
    });
}
