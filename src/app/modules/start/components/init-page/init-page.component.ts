import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/shared/services/alert.service';
import { GameStorage } from 'src/app/shared/storage/GameStorage';
import { LevelsURL } from 'src/app/configs/app.config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-init-page',
  templateUrl: './init-page.component.html'
})
export class InitPageComponent implements OnInit {

  constructor(private router: Router, private alertService: AlertService) { }

  ngOnInit(): void {
  }

  async startGame(): Promise<void> {
    var storage = GameStorage.getGameData();
    if (storage == undefined) {
      try {
        const response = await fetch('https://worldtimeapi.org/api/ip');

        if (response.ok) {
          const data = await response.json();
          const datetime = new Date(data.utc_datetime);
          GameStorage.saveGameData({
            StartGame: datetime,
            ActualLevel: 1
          });
        } else {
          this.alertService.showErrorAlert("Error al obtener fecha y hora", "Error de comunicación");
        }
      } catch (error) {
        this.alertService.showErrorAlert("Error al guardar la información inicial", "Error de información");
      }
    } else {
      var data = GameStorage.getGameData();
      var url = LevelsURL.find(f => f.level == data?.ActualLevel)?.url;
      this.router.navigate([url]);
    }
  }

}
