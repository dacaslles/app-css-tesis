import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { GhostImages } from 'src/app/configs/app.config';

@Component({
  selector: 'app-lesson-s1',
  templateUrl: './lesson-s1.component.html'
})
export class LessonS1Component implements OnInit {

  ghostNames: Array<{name:string, type:string, position:number, url:string|undefined}>
  cssSections: Array<{name:string, costume: string}>;
  lessonOneForm: FormGroup;

  constructor() {
    let normalurl = GhostImages.find(f => f.type == 'normal')?.image
    this.ghostNames = [
      {name: 'GIDEON', type: 'BUENO', position: 0, url: normalurl},
      {name: 'LUCIAN', type: 'MALO', position: 1, url: normalurl},
      {name: 'EVANTRIA', type: 'BUENO', position: 2, url: normalurl},
      {name: 'EVELINA', type: 'MALO', position: 3, url: normalurl},
      {name: 'EZRA', type: 'BUENO', position: 4, url: normalurl},
      {name: 'CASPIAN', type: 'MALO', position: 5, url: normalurl}
    ];

    this.cssSections = [
      {name: 'codeOne', costume: 'scarf'},
      {name: 'codeTwo', costume: 'gorro'},
      {name: 'codeThree', costume: 'crown'},
      {name: 'codeFour', costume: 'astro'},
      {name: 'codeFive', costume: 'witch'},
      {name: 'codeSix', costume: 'scarf'}
    ];

    this.lessonOneForm = new FormGroup({
      codeOneName: new FormControl('', [Validators.required]),
      codeOneType: new FormControl('', [Validators.required]),
      codeTwoName: new FormControl('', [Validators.required]),
      codeTwoType: new FormControl('', [Validators.required]),
      codeThreeName: new FormControl('', [Validators.required]),
      codeThreeType: new FormControl('', [Validators.required]),
      codeFourName: new FormControl('', [Validators.required]),
      codeFourType: new FormControl('', [Validators.required]),
      codeFiveName: new FormControl('', [Validators.required]),
      codeFiveType: new FormControl('', [Validators.required]),
      codeSixName: new FormControl('', [Validators.required]),
      codeSixType: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  inputBlur(formControlName:string): void {
    let formControlType = formControlName.substring(formControlName.length - 4);
    let formControlPartner = '';
    formControlType == 'Name' ? formControlPartner = formControlName.substring(0, formControlName.length-4) + 'Type'
      : formControlPartner = formControlName.substring(0, formControlName.length-4) + 'Name';
    let idControl: AbstractControl;
    let classControl: AbstractControl;
    if (formControlType == 'Name') {
      idControl = this.lessonOneForm.controls[formControlName];
      classControl = this.lessonOneForm.controls[formControlPartner];
    } else {
      idControl = this.lessonOneForm.controls[formControlPartner];
      classControl = this.lessonOneForm.controls[formControlName];
    }

    if (idControl.status == 'VALID' && classControl.status == 'VALID') {
      let ghostSelected = this.ghostNames.find(f => f.name == idControl.value.toUpperCase() && f.type == classControl.value.toUpperCase());
      if (ghostSelected) {
        let section = this.cssSections.find(f => f.name == formControlName.substring(0, formControlName.length-4));
        let image = GhostImages.find(f => f.type == section?.costume);
        ghostSelected.url = image?.image;
      }
    }
  }

}
