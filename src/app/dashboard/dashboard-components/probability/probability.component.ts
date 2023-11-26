import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-probability',
  templateUrl: './probability.component.html',
  styleUrls: ['./probability.component.scss']
})
export class ProbabilityComponent {
  @Input() dataList: any;

}
