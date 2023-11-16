import {Component, Input} from "@angular/core";
import {RepositoryModel} from "../../models/repository-model";

@Component({
  selector: "app-repository-table",
  templateUrl: "./repository-table.component.html",
  styleUrls: ["./repository-table.component.scss"]
})
export class RepositoryTableComponent {
  @Input() dataSource:  RepositoryModel[] = [];
  @Input() toggleFav:  (id: number) => void;

  public displayedColumns = ["name", "html_url", "description", "stargazers_count", "action_star"];
}
