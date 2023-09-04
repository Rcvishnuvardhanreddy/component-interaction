import { Component, OnInit } from '@angular/core';
import { BaseChildComponent } from '../base-child-component';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-child-component3',
  templateUrl: './child-component3.component.html',
  styleUrls: ['./child-component3.component.scss']
})
export class ChildComponent3Component extends BaseChildComponent implements OnInit  {

  childComponent3Input: string = '';

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.myForm = this.parentValueModel.get(this.formName) as FormGroup;
    this.myForm.addControl('input3', new FormControl('', [Validators.required, Validators.min(5)]))
  }

  override isValid() {
    this.isFormValid = this.childComponent3Input.length >= 5;
    return this.isFormValid
  }
}