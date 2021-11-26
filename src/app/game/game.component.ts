import { Component, OnInit,OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataManagerService } from '../data-manager.service'
import { Post } from '../Post';
import { GameInfo } from '../Game';
import { Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table'  

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit,OnDestroy{

  games: Array<GameInfo> = []
  displayedColumns: string[] = ['id', 'name', 'year', 'system','rating','detail'];
  private livePostsSub: any;
  private gmaeInfo: any;


  constructor(private data: DataManagerService,private router: Router) { }

  ngOnInit(): void {
  
   this.gmaeInfo = this.data.getGameInfo().subscribe(data => this.games = data);
   console.log(this.games)
  }
  goToGameDetails(id:number) {
    this.router.navigate(['/gameDetail', id]);
  }
  ngOnDestroy(): void {
    this.gmaeInfo.unsubscribe();
  }

}
