import { Component, AfterViewInit, EventEmitter, Output } from '@angular/core';
import { NgbDropdownModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { DashboardService } from 'src/app/service/dashboard.service';

declare var $: any;

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports:[NgbDropdownModule],
  templateUrl: './navigation.component.html',
  styleUrls: ["./navigation.component.scss"],
})
export class NavigationComponent implements AfterViewInit {
  @Output() toggleSidebar = new EventEmitter<void>();

  name:string;
  imageURL:any;

  constructor(private dashboardService: DashboardService,private authentication:AuthenticationService ) {
  }
  ngOnInit() {
    this.dashboardService.userDtls().subscribe((result: any) => {
      this.name=result["data"]["first_name"] + " " + result["data"]["last_name"]
      this.imageURL=result["data"]["image"]!=null?result["data"]["image"]:'https://django-media-lead-tracker-dev.s3.amazonaws.com/media/projectuser/21/k4SaFVl0Hw1692784011524.uK7hN.png'
    });
}
Logout(){
  this.authentication.logout()
}

  ngAfterViewInit() { }
}
