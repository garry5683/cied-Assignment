import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lead-table',
  templateUrl: './lead-table.component.html',
  styleUrls: ['./lead-table.component.scss']
})
export class LeadTableComponent {
  @Input() dataList: any=[];
  searchString = '';

}
