import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson-d3',
  templateUrl: './lesson-d3.component.html'
})
export class LessonD3Component implements OnInit {

  public ghostList = new Array<String>();
  public portalList = new Array<String>();

  constructor() {

    for(var i = 0; i < 6; i++){
      this.ghostList.push('assets/images/ghost-astro.gif');
      this.portalList.push('assets/images/portal/portal.gif');
    }

  }

  ngOnInit(): void {
  }

}
