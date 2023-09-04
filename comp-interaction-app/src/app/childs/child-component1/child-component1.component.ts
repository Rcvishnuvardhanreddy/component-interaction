import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BaseChildComponent } from '../base-child-component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-child-component1',
  templateUrl: './child-component1.component.html',
  styleUrls: ['./child-component1.component.scss']
})
export class ChildComponent1Component extends BaseChildComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {
    this.myForm = this.parentValueModel.get(this.formName) as FormGroup;
    this.myForm.addControl('input1', new FormControl('', [Validators.required, Validators.minLength(3)]))
  }
}
