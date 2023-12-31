import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LevelsModule } from './modules/levels/levels.module';
import { AlertService } from './shared/services/alert.service';
import { SharedModule } from './shared/shared.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NavigationService } from './shared/services/navigation.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    LevelsModule,
    SharedModule,
    NgxSpinnerModule
  ],
  providers: [
    AlertService,
    NavigationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
