import { NgModule } from "@angular/core";
import { CommonModule as AngularCommonModule } from "@angular/common";
import {HeaderComponent} from "./header/header.component";
import { RepositoryTableComponent } from "./repository-table/repository-table.component";
import {MatTableModule} from "@angular/material/table";
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [HeaderComponent, RepositoryTableComponent],
  exports: [RepositoryTableComponent, HeaderComponent],
  imports: [AngularCommonModule, MatTableModule, RouterLink]
})
export class CommonModule {}
