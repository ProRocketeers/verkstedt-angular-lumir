import {Component, effect} from "@angular/core";
import {GithubService} from "../services/github.service";
import { RepositoryModel} from "../../../models/repository-model";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"],
})
export class TableComponent {
  public dataSource:  RepositoryModel[] = [];
 constructor(private githubService: GithubService) {
   effect(() => {
        this.dataSource = this.githubService.gitHubData()?.items ?? [];
     }
   );

   this.githubService.toggleOnlyFav(false);
 }

 public toggleFav = (id: number) => this.githubService.toggleFav(id);

}
