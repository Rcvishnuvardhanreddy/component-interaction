import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BaseChildComponent } from '../base-child-component';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-child-component2',
  templateUrl: './child-component2.component.html',
  styleUrls: ['./child-component2.component.scss']
})
export class ChildComponent2Component extends BaseChildComponent implements OnInit {
  childComponent2Input: string = '';

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.myForm = this.parentValueModel.get(this.formName) as FormGroup;
    this.myForm.addControl('input2', new FormControl('', [Validators.required, Validators.min(4)]))
  }

  override isValid() {
    this.isFormValid = this.childComponent2Input.length >= 4;
    return this.isFormValid
  }
}