import { Component } from "@angular/core";
import {GithubService} from "../services/github.service";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.scss"]
})
export class FilterComponent {
  constructor(private gitHubService: GithubService) {
  }

  public filterFav = (checked: boolean) => this.gitHubService.toggleOnlyFav(checked);
}
