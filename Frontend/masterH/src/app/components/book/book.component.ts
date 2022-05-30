import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  
  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    this.getService();
  }
  services:any;

  getService(){
    this.service.getServices().subscribe((res:any)=>{
      console.log(res);
      this.services=res;
    });
  }
}
