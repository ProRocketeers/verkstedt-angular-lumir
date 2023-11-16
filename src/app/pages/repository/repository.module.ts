import { NgModule } from "@angular/core";
import { CommonModule as AngularCommonModule } from "@angular/common";
import {GithubService} from "./services/github.service";
import {TableComponent} from "./table/table.component";
import {HttpClientModule} from "@angular/common/http";
import {MatTableModule} from "@angular/material/table";
import {AngularSvgIconModule } from "angular-svg-icon";
import {MatIconModule} from "@angular/material/icon";
import { FilterComponent } from "./filter/filter.component";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {CommonModule} from "../../common/common.module";
import { FavTableComponent } from "./fav-table/fav-table.component";



@NgModule({
  declarations: [TableComponent, FilterComponent, FavTableComponent],
  providers: [GithubService],
  imports: [
    AngularCommonModule,
    HttpClientModule,
    MatTableModule,
    AngularSvgIconModule.forRoot(),
    MatIconModule,
    MatCheckboxModule,
    CommonModule
  ]
})
export class RepositoryModule {}
