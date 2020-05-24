import { Component, OnInit, ViewChild } from '@angular/core';
import { ReportService } from 'src/app/Services/report.service';
import { Employee } from 'src/app/Module/employee';
import { Router } from '@angular/router';
import { PdfComponent } from '../pdf/pdf.component';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  public show:boolean = false;
  reports: any;
  birthday: any;
  hiered_date: any;
  @ViewChild('PdfComponent',{static: false})
  private childComponentParent: PdfComponent;

  constructor(private reportservice: ReportService, private route: Router) { 
    setTimeout(() =>{  
      this.show = true;  
    }, 5000);  
  }

  ngOnInit() {
    this.getReport();
    // this.getfilterreport();
  }

  toggle(){
    this.show =!this.show;
  }

  getReport(){
    this.reportservice.GetReport().subscribe((data)=>{
      this.reports = data;
      console.log(this.reports);
    })
  }

  getfilterreport(){
    this.reportservice.GetReportFilter(this.birthday,this.hiered_date).subscribe((data)=>{
      this.reports = data;
      console.log(this.reports);
    })
  }

//   generatePDFParent() {

//     this.childComponentParent.generatePDFChild();

//  }

}
