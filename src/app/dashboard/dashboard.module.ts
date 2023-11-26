import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { NgApexchartsModule } from "ng-apexcharts";
import { DashboardComponent } from "./dashboard.component";
import { ProbabilityComponent } from './dashboard-components/probability/probability.component';
import { GraphComponent } from './dashboard-components/graph/graph.component';
import { ActiveLeadCaardsComponent } from './dashboard-components/active-lead-caards/active-lead-caards.component';
import { LeadTableComponent } from './dashboard-components/lead-table/lead-table.component';
import { SearchNamePipe } from '../pipes/search-name.pipe';


const routes: Routes = [
  {
    path: "",
    data: {
      title: "Dashboard",
      urls: [{ title: "Dashboard", url: "/dashboard" }, { title: "Dashboard" }],
    },
    component: DashboardComponent,
  },
];

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    NgApexchartsModule,
  ],
  declarations: [
    DashboardComponent,
    ProbabilityComponent,
    GraphComponent,
    ActiveLeadCaardsComponent,
    LeadTableComponent,
    SearchNamePipe
  ],
})
export class DashboardModule {}
