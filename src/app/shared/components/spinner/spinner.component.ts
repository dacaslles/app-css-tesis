import { Component, Input, OnInit } from '@angular/core';
import { SpinnerConfiguration } from '../../../configs/app.config';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html'
})
export class SpinnerComponent implements OnInit {

  @Input()name = 'spinner';
  @Input()fullscreen = true;

  spinnerConf = SpinnerConfiguration;
  spinnerText: string | undefined = "";

  constructor( private spinnerService: NgxSpinnerService ) {
  }

  ngOnInit(): void {
  }

  public show(text?: string): Promise<any> {
    this.spinnerText = text;
    return this.spinnerService.show(this.name);
  }

  public hide(): Promise<any> {
    return this.spinnerService.hide(this.name);
  }

}
