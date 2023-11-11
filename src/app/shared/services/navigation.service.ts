import { Injectable } from '@angular/core';
import { GameStorage } from '../storage/GameStorage';
import { LevelsURL } from 'src/app/configs/app.config';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class NavigationService {

  constructor(private router: Router,){}

  public goToLevel(movement: number): void {
    var data = GameStorage.getGameData();
    if(movement > 0) {
      var game = GameStorage.getGameData();
      if (game != undefined) {
        game.ActualLevel = game.ActualLevel + movement;
      }
    } 
    var url = LevelsURL.find(f => f.level == game?.ActualLevel)?.url;
    this.router.navigate([url]);
  }
}
