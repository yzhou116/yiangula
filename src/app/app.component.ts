import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { DataManagerService } from './data-manager.service'
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {DailogComponent} from './dailog/dailog.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  visible:boolean = false
  checkUser:any = {}
  mlogout:any = {
      
  }
 

  constructor(private router: Router,private data: DataManagerService,private dialog: MatDialog){

  }
  validateUser(e:any){
   console.log("this is user info" + e)
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.checkUser = this.data.getloginInfo()
    console.log(this.data.getloginInfo())
  }
   ngAfterContentChecked(): void {
     //Called after every check of the component's or directive's content.
     //Add 'implements AfterContentChecked' to the class.
     console.log(this.data.getloginInfo())
    this.checkUser=this.data.getloginInfo()
   }
   openDailog(){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(DailogComponent, dialogConfig);

   }


   logout(){
   
    this.data.setloginInfo(this.mlogout)
   }
}
