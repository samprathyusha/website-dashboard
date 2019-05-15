import { Injectable } from '@angular/core';
import { getViewData } from '@angular/core/src/render3/state';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {
  totalproducts:any;
  tamperproducts:any;
  untamperproducts:any;
  data=[];


  constructor() { }


  setdata(productss){
    // this.totalproducts=productss.TotalProductInBlockchain;
    this.totalproducts=17;
    this.tamperproducts=productss.tamperproduct;
this.untamperproducts=productss.nontamperproduct;


  }
  getdata(){
  

    return {total:this.totalproducts, tamper:this.tamperproducts, untamper:this.untamperproducts};
    

    
  }

}


