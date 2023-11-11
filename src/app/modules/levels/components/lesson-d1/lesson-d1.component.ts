import { Component, OnInit } from '@angular/core';
import { CauldronImages, GhostImages } from 'src/app/configs/app.config';
import GifImage from 'src/app/shared/types/gif.interface';

@Component({
  selector: 'app-lesson-d1',
  templateUrl: './lesson-d1.component.html'
})
export class LessonD1Component implements OnInit {

  purpleCauldron: GifImage | undefined;
  blueCauldron: GifImage | undefined;
  ghost: GifImage | undefined;

  constructor() { 
    this.purpleCauldron = CauldronImages.find(f => f.type == 'purple');
    this.blueCauldron = CauldronImages.find(f => f.type == 'blue');
    this.ghost = GhostImages.find(f => f.type == 'witch');
  }

  ngOnInit(): void {
  }

}
