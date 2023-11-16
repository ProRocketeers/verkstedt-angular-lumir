import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {TableComponent} from "./pages/repository/table/table.component";
import {FavTableComponent} from "./pages/repository/fav-table/fav-table.component";

const routes: Routes = [{
  path: "", component: TableComponent
}, {
  path: "fav", component: FavTableComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
