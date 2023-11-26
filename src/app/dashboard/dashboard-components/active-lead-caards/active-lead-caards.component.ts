import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-active-lead-caards',
  templateUrl: './active-lead-caards.component.html',
  styleUrls: ['./active-lead-caards.component.scss']
})
export class ActiveLeadCaardsComponent {
  @Input() dataList: any;
  constructor() {   }

  ngOnInit(): void {
  }
}
