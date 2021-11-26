import {ElementRef,ViewChild,  Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import {UserInfo} from '../UserInfo'
import { DataManagerService } from '../data-manager.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
/*   @ViewChild('upper') upper: ElementRef; */
@Output()
 private outer=new EventEmitter();
  userInfo:UserInfo = new UserInfo
  userName:string = ""
  password:string = ""
  passwordInput:string = ""
  userLogin:any;
  checkUserName:boolean = false
  checkPassword:boolean = false
  loginfail:boolean = false
  invalidpassword:boolean = false
  loginResult:any;


  constructor(private el:ElementRef,private data: DataManagerService, private router: Router) { }

  ngOnInit(): void {
  }
  listenUserName(e:any){
    this.loginfail = false
    this.invalidpassword = false
    if (e.which === 32){
      this.checkUserName = true
      console.log("Listen user name")
      e.preventDefault();
    }else{
      this.checkUserName = false
    }
 
  }
  async checkPassowrd(){
   var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    if(this.passwordInput.match(new RegExp("[A-Z]")) 
    && this.passwordInput.match(new RegExp("[a-z]")) 
    && format.test(this.passwordInput)
    && this.passwordInput.length >=8){
      return true
    }
    return false
  }

  onPasswordChange(event:any){
    this.loginfail = false
    this.invalidpassword = false
    this.passwordInput = event.target.value
    console.log(this.passwordInput)
    if(this.passwordInput.match(new RegExp("[A-Z]"))){
      this.el.nativeElement.querySelector('.upper').style.color = "green"
    }else{
      this.el.nativeElement.querySelector('.upper').style.color = "grey"
    }
    if(this.passwordInput.match(new RegExp("[a-z]"))){
      this.el.nativeElement.querySelector('.lower').style.color = "green"
    }else{
      this.el.nativeElement.querySelector('.lower').style.color = "grey"
    }
    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if(format.test(this.passwordInput)){
      this.el.nativeElement.querySelector('.special').style.color = "green"
    }else{
      this.el.nativeElement.querySelector('.special').style.color = "grey"
    } 
    if( this.passwordInput.length >=8){
      this.el.nativeElement.querySelector('.eight').style.color = "green"
    }else{
      this.el.nativeElement.querySelector('.eight').style.color = "grey"
    }

  }
 async onSubmit(){

   let passwordPolicy = await this.checkPassowrd()
   if(!passwordPolicy){
    this.invalidpassword = true
    this.loginfail = false
    this.checkPassword = false
   
    return

   }
   console.log(passwordPolicy)
   console.log(this.checkPassowrd())
    this.userInfo.username = this.userName 

    this.userInfo.password = this.password 
    this.loginResult = await this.data.userLogin2(this.userInfo)
    console.log( this.loginResult) 
    if(this.loginResult.success == false){
      this.invalidpassword = false
      this.loginfail = true
      this.checkPassword = false
      return
    }
    this.data.setloginInfo(this.loginResult)
    this.router.navigate(['/']);



  }
  listenPassword(e:any){
 
    if (e.which === 32){
      this.checkPassword = true
      this.invalidpassword = false
      this.loginfail = false
      e.preventDefault();
      return
    }else{
      this.checkPassword = false
    }
    console.log(this.password)

    console.log(this.el.nativeElement);
  }

}
