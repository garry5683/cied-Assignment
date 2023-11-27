import { Component, AfterViewInit } from '@angular/core';
import { DashboardService } from '../service/dashboard.service';

@Component({
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements AfterViewInit {
  subtitle: string;

  constructor(
    private dashboardService: DashboardService,
) { }


  ngAfterViewInit() { }

  ngOnInit() {
    this.action('active')
}

activeCount:string;
wonCount:string;
lostCount:string;
graphList:any=[]
probabilityList:any;
activeLeadList:any=[]
LeadDataList:any=[]
activeFlag:boolean=true

action(action:string){
  this.grapgDtls(action)
  this.probabilityDtls(action)
  if(action=='active'){this.activeLeadDtls(action);this.activeFlag=true;}else{this.activeFlag=false}
  this.LeadList(action)
}
grapgDtls(action:string){
  let params={stage_type:action}
    this.dashboardService.grapgDtls(params).subscribe((result: any) => {
      this.activeCount=result['data']['stage_type_count'].find(s => s['stage_type'] === "active")['value']
      this.wonCount=result['data']['stage_type_count'].find(s => s['stage_type'] === "won")['value']
      this.lostCount=result['data']['stage_type_count'].find(s => s['stage_type'] === "lost")['value']

      let categories=[]
      let data=[]
      result['data']['graph'].forEach(element => {
        data.push(element.leads)
        categories.push(element.stage_name)
      })

      this.graphList = {
        series: [
          {
            name: "Lead list",
            data: data
          }
        ],
        chart: {
          height: 180,
          type: "bar",
          toolbar: {show: false}
        },
        colors: [
          "#D3DFFB",
          "#A7BFF4",
          "#7C9EF2",
          "#507EEC",
          "#3454CF"
        ],
        plotOptions: {
          bar: {
            columnWidth: "25%",
            distributed: true
          }
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          show: false
        },
        grid: {
          show: true
        },
        xaxis: {
          categories: [
            ['Contact' , 'Made'],['Initial' , 'Interest'],['First intro' , 'meeting'],['Follow Up' , 'Meetings' ],['Workshops' , 'Stage']
          ],
          axisTicks: {
            show: false
          }
        },
        tooltip: {
          enabled: false,
        },
        yaxis:{
          tickAmount : 0
        }
      };
    });
}

probabilityDtls(action:string){
  let params={stage_type:action}
    this.dashboardService.probabilityDtls(params).subscribe((result: any) => {
      this.probabilityList=result["data"]
    });
  }

  activeLeadDtls(action:string){
    let params={stage_type:action}
      this.dashboardService.activeLeadDtls(params).subscribe((result: any) => {
        this.activeLeadList=result['data']['results']
      });
    }

    LeadList(action:string){
      let params={stage_type:action}
        this.dashboardService.LeadList(params).subscribe((result: any) => {
          let dataList=result['data']['results']
          let resData=[]
          dataList.forEach(element => {

            resData.push({
              Lead_Name:element["name"],
              Date_Added:new Date(+element["created_on"]),
              Current_State:element["stage"][element["stage"].length-1]['name'],
              Probability:element["probability"],
              Team_Size:element["organization"]['team_size'],
              Location:element["organization"]['country'],
              Revenue_:element["organization"]['revenue'],
              Category:element["category"]['name'],
              logo:element["organization"]['logo']!=null?element["organization"]['logo']:'https://django-media-lead-tracker-dev.s3.amazonaws.com/media/projectuser/21/k4SaFVl0Hw1692784011524.uK7hN.png',
              id:element["id"],
            })
          });

          this.LeadDataList=resData

        });
      }
}


