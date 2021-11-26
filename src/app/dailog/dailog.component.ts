import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { DataManagerService } from '../data-manager.service'

@Component({
  selector: 'app-dailog',
  templateUrl: './dailog.component.html',
  styleUrls: ['./dailog.component.css']
})
export class DailogComponent implements OnInit {
 /*  private dialog: MatDialogRef<DailogComponent> */
 mlogout:any = {
   success : false,
   username : ""
 }
  constructor(private data: DataManagerService) {
   
   }

  ngOnInit(): void {
  }
 
  onYesClick(){
   
    this.data.setloginInfo(this.mlogout)
    
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    
  }

}
