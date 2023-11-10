import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule } from '@angular/router';

import { FullViewComponent } from './components/full-view/full-view.component';
import { LessonS1Component } from './components/lesson-s1/lesson-s1.component';
import { LessonS2Component } from './components/lesson-s2/lesson-s2.component';
import { LessonD1Component } from './components/lesson-d1/lesson-d1.component';
import { LessonD2Component } from './components/lesson-d2/lesson-d2.component';
import { LessonD3Component } from './components/lesson-d3/lesson-d3.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    FullViewComponent,
    LessonS1Component,
    LessonS2Component,
    LessonD1Component,
    LessonD2Component,
    LessonD3Component
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule,
    SharedModule
  ]
})
export class LevelsModule { }
