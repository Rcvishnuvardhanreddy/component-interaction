import { Component, OnInit } from '@angular/core';
import { BaseChildComponent } from '../base-child-component';

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
    this.childComponent3Input = this.parentValueModel.input3;
  }

  override isValid() {
    this.parentValueModel.input3 = this.childComponent3Input;
    this.isFormValid = this.childComponent3Input.length >= 5;
    return this.isFormValid
  }
}