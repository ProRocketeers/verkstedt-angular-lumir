import {Component, effect} from "@angular/core";
import {GithubService} from "../services/github.service";
import {RepositoryModel} from "../../../models/repository-model";

@Component({
  selector: "app-fav-table",
  templateUrl: "./fav-table.component.html",
  styleUrls: ["./fav-table.component.scss"]
})
export class FavTableComponent {
  public dataSource: RepositoryModel[] = [];

  constructor(private gitHubService: GithubService) {
    effect( () =>
       this.dataSource = this.gitHubService.gitHubData()?.items ?? []
    );

    this.gitHubService.toggleOnlyFav(true);
  }

}
