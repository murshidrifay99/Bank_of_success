import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-view-application',
  templateUrl: './view-application.component.html',
  styleUrls: ['./view-application.component.css']
})
export class ViewApplicationComponent implements OnInit {
  data: any;

  constructor(private view:CommonService){}
  ngOnInit(): void {
    this.fetchApplications();
  }

  fetchApplications(){
    return this.view.getApplication().subscribe((resp:any) =>{
      this.data = resp;
    })
  }

  deleteData(data:any){
    return this.view.deleteApplication(data.id).subscribe((resp:any) =>{
      console.log(resp);
      alert("Application deleted successfully");
      window.location.reload();
    });
  }

}
