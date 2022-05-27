import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:ServiceService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
   this.getService();
  
  }
getService(){
  this.service.getServices().subscribe((res:any)=>{
    console.log(res);
    
  });
}
myFunction(){
  this.router.navigateByUrl('/gallery', {replaceUrl:true});
}

}
