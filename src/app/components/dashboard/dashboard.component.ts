import { Component, OnInit } from '@angular/core';
import { Dashbord } from 'src/app/Models/dashbord';
import { DasboardService } from 'src/app/services/dasboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private api:DasboardService) { }

  inputval:string = ''
  dataArr:Dashbord[] = [];
  editedTask:string = ''
  
  taskObj:Dashbord = new Dashbord();

  ngOnInit(): void {
    this.editedTask = ''
    this.taskObj = new Dashbord();
    this.getallData();
  }

  addData(){
    this.taskObj.task = this.inputval
    this.api.postData(this.taskObj).subscribe((res)=>{
      this.ngOnInit()
      this.inputval = ''
    },err=>{
      alert(err)
    })
  }

  getallData(){
    this.api.getData().subscribe((res)=>{
      this.dataArr = res;
      console.log(this.dataArr)
    })
  }

  deletingData(data:Dashbord){
     this.api.deleteData(data).subscribe((res)=>{
      this.ngOnInit();
     },err=>{
      alert('error in deleting data')
     })
  }

  callEdit(data:Dashbord){
    this.taskObj = data;
    this.editedTask = data.task
    console.log(this.taskObj)
  }

  UpdateData(){
    this.taskObj.task = this.editedTask
    this.api.updateData(this.taskObj).subscribe((res)=>{
      this.ngOnInit()
    },err=>{
      alert(err)
    })
  }

  

}
