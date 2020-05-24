import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/Services/employee.service';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-employee-next',
  templateUrl: './employee-next.component.html',
  styleUrls: ['./employee-next.component.scss']
})
export class EmployeeNextComponent implements OnInit {

  // public pieChartLabels: Label[] = [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'];
  pieChartLabels =  ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];

  // public pieChartData: number[] = [300, 500, 100];
  // public meals: Meal[] = [];

  public pieChartData: any[] = [
    { 
    monthdata: []
    }
];


monthdata: any[] = [];

  // data: any;
  constructor(private empdataservice: EmployeeService, private http: HttpClient) {

   }

   ngOnInit () {
    this.getmonth();
    this.getyear();

}
      // CHART COLOR.
      pieChartColor:any = [
        {
            backgroundColor: ['rgba(30, 169, 224, 0.8)',
            'rgba(255,165,0,0.9)',
            'rgba(139, 136, 136, 0.9)',
            'rgba(255, 161, 181, 0.9)',
            'rgba(255, 102, 0, 0.9)'
            ]
        }
    ]
    

    onChartClick(event) {
      // alert(event);
      console.log(event);
  }

  pieChartOptions = {
    responsive: true
}



  getmonth(){
    this.empdataservice.getmonth().subscribe((response)=>{
      this.pieChartData = response as any [];
      console.log(this.pieChartData);
    })
  }

//********************bar chart*******************//

chartOptions = {
  responsive: true    // THIS WILL MAKE THE CHART RESPONSIVE (VISIBLE IN ANY DEVICE).
}

labels =  ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

public chartData : any = [
  {
    label: '1st Year',
    data: [], 
  },
  { 
    label: '2nd Year',
    data: []
  }
];

  // CHART COLOR.
  colors = [
    { // 1st Year.
      backgroundColor: 'rgba(77,83,96,0.2)'
    },
    { // 2nd Year.
      backgroundColor: 'rgba(30, 169, 224, 0.8)'
    }
  ]

  getyear(){
    this.empdataservice.getyear().subscribe((res)=>{
      // this.someData = [];
      this.chartData = res as any [];
    })
  }

//********************bar chart*******************//



}
