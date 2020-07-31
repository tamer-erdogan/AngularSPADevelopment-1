import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss'],
})
export class FormArrayComponent implements OnInit {
  public skillForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.skillForm = this.fb.group({
      name: 'Giro',
      skillsGrp: this.fb.array([
        this.fb.group({ skillname: 'Hunting', years: 9 }),
      ]),
    });
  }

  ngOnInit() {}

  addSkill() {
    const skillsGrp = this.skillForm.controls['skillsGrp'] as FormArray;
    skillsGrp.push(
      this.fb.group({
        skillname: '',
        years: '',
      })
    );
  }

  saveForm() {
    console.log('saving ...', this.skillForm.value);
  }

  getElementsInFormArray() {
    return (this.skillForm.controls['skillsGrp'] as FormArray).controls;
  }
}
