import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BaseChildComponent } from '../base-child-component';

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
    this.childComponent2Input = this.parentValueModel.input2;
  }

  override isValid() {
    this.parentValueModel.input2 = this.childComponent2Input;
    return this.childComponent2Input.length >= 5;
  }
}