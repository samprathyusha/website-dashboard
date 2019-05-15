import { Component, OnInit, Inject } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {DOCUMENT} from '@angular/common';
import {Chart} from 'chart.js';
import {CalculationService} from '../calculation.service';




@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  $:any;
  percentage:any;
  tamperproducts:any;
  untamperproductss:any;
  citytamperanduntamper=[];
  
  


  constructor(public http:Http, @Inject(DOCUMENT) document, public calculator:CalculationService) {
setTimeout(()=>{
  this.percentage= this.calculator.getdata();
   this.tamperproducts=((this.percentage.tamper/this.percentage.total)*100).toFixed(2);
 this.untamperproductss=((this.percentage.untamper/this.percentage.total)*100).toFixed(2);

 var myChart = new Chart("percent-chart", {
   type: 'doughnut',
   data: {
     datasets: [
       {
         label: "My First dataset",
         data: [this.untamperproductss, this.tamperproducts],
       //  data:[20,80],        
         backgroundColor: [
           '#00b5e9',
           '#fa4251'
         ],
         hoverBackgroundColor: [
           '#00b5e9',
           '#fa4251'
         ],
         borderWidth: [
           0, 0
         ],
         hoverBorderColor: [
           'transparent',
           'transparent'
         ]
       }
     ],
     labels: [
       'Products',
       'Services'
     ]
   },
   options: {
     maintainAspectRatio: false,
     responsive: true,
     cutoutPercentage: 55,
     animation: {
       animateScale: true,
       animateRotate: true
     },
     legend: {
       display: false
     },
     tooltips: {
       titleFontFamily: "Poppins",
       xPadding: 15,
       yPadding: 10,
       caretPadding: 0,
       bodyFontSize: 16
     }
   }
 });

},6000)


}
  
  
   
   

  ngOnInit() { 
     
    let headers= new Headers();
    headers.append('content-type','application/json');
    this.http.post('http://35.162.177.53:3900/api/AssetsOnCitys', {headers:headers}).map(res=>res.json()).subscribe(totalproductss=>{
    
      this.citytamperanduntamper=totalproductss;
    });



  }
    // let headers= new Headers();
    // headers.append('content-type','application/json');
    // this.http.post('ipaddresss:portnumber/report', "data",{headers:headers} ).map(res=>res.json());


}


