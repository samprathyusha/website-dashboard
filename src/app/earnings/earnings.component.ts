import { Component, OnInit ,TemplateRef} from '@angular/core';
import { Http, Headers } from "@angular/http";
import {BsModalService,BsModalRef} from 'ngx-bootstrap/modal'

@Component({
  selector: 'app-earnings',
  templateUrl: './earnings.component.html',
  styleUrls: ['./earnings.component.scss']
})
export class EarningsComponent implements OnInit {
  earningarray=[];
  modalRef:BsModalRef;
  trackinginfo=[];

  constructor(public http:Http,private modalservice:BsModalService) { }

  ngOnInit() {
    let headers= new Headers();
    headers.append('content-type','application/json');
    this.http.post('http://35.162.177.53:3900/api/allassets', {headers:headers}).map(res=>res.json()).subscribe(totalproductss=>{
      
      this.earningarray=totalproductss;

    });
  }

  showtracking(  assetname, template:TemplateRef<any>){
    this.modalRef=this.modalservice.show(template);

    
    let headers= new Headers();
    headers.append('content-type','application/json');
    var senddata={"productid":assetname}
    this.http.post('http://35.162.177.53:3900/api/tracking',senddata, {headers:headers}).map(res=>res.json()).subscribe(assettransaction=>{
      this.trackinginfo=assettransaction;
    })

}
}
