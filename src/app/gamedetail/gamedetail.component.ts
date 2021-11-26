import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { GameInfo } from '../Game';
import { DataManagerService } from '../data-manager.service'


@Component({
  selector: 'app-gamedetail',
  templateUrl: './gamedetail.component.html',
  styleUrls: ['./gamedetail.component.css']
})
export class GamedetailComponent implements OnInit,OnDestroy {
  
  gameDetail: GameInfo = new GameInfo
  theGame:any
  constructor(private route: ActivatedRoute,private data: DataManagerService,private router: Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    console.log(id)
    this.theGame = this.data.getDetail(id).subscribe(data => this.gameDetail = data);
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.theGame.unsubscribe();
  }
  goBack(){
    this.router.navigate(['/']);

  }



}
