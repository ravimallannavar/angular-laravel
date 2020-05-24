import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Employee } from 'src/app/Module/employee';
import { PdfService } from 'src/app/Services/pdf.service';
import * as jsPDF from 'jspdf';
import * as XLSX from 'xlsx';  
import html2canvas from 'html2canvas';  

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss']
})
export class PdfComponent implements OnInit {
  @ViewChild('content', {static: false}) content: ElementRef;
  employees: any;

  constructor(private pdfservice: PdfService) { }

  ngOnInit() {
    this.getEmployee();
  }

  

  getEmployee(){
    this.pdfservice.GetEmployee().subscribe((data)=>{
      this.employees = data;
      console.log(this.employees);
    })
  }

  public captureScreen(): void 
    // let content = this.content.nativeElement;
    // let doc = new jsPDF();
    // let _elementHandlers = 
    // {
    //   '#editor': function(element,renderer){
    //     return true;
    //   }
    // };

  

    // doc.fromHTML(content.innerHTML,15,15,{
     
    //    width: 190,
    //   margin:80,
    //   'elementHandlers':_elementHandlers
    // });
    //   doc.save('test.pdf');

    {  
      var data = document.getElementById('content');  
      html2canvas(data).then(canvas => {  
        // Few necessary setting options  
        var imgWidth = 210;   
        var pageHeight = 310;    
        var imgHeight = canvas.height * imgWidth / canvas.width;  
        var heightLeft = imgHeight;  
    
        const contentDataURL = canvas.toDataURL('image/png')  
        let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF  
        var position = 0;  
        pdf.setFont("helvetica");
pdf.setFontType("bold");
pdf.setFontSize(15);
        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
        pdf.save('MYPdf.pdf'); // Generated PDF   
      });  
    } 

  

  SaveEXCEL() {  
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.content.nativeElement);  
    const wb: XLSX.WorkBook = XLSX.utils.book_new();  
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');  
    XLSX.writeFile(wb, 'ScoreSheet.xlsx');  
  } 

}
