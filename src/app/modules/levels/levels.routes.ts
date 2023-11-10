import { Routes } from '@angular/router';

import { LessonS1Component } from './components/lesson-s1/lesson-s1.component';
import { LessonS2Component } from './components/lesson-s2/lesson-s2.component';
import { LessonD1Component } from './components/lesson-d1/lesson-d1.component';
import { LessonD2Component } from './components/lesson-d2/lesson-d2.component';
import { LessonD3Component } from './components/lesson-d3/lesson-d3.component';

export const levelsRoutes: Routes = [
    { path: 'lesson-S1', component: LessonS1Component },
    { path: 'lesson-S2', component: LessonS2Component },
    { path: 'lesson-D1', component: LessonD1Component },
    { path: 'lesson-D2', component: LessonD2Component },
    { path: 'lesson-D3', component: LessonD3Component }
];
