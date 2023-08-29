import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BaseChildComponent } from '../base-child-component';

@Component({
  selector: 'app-child-component1',
  templateUrl: './child-component1.component.html',
  styleUrls: ['./child-component1.component.scss']
})
export class ChildComponent1Component extends BaseChildComponent implements OnInit {
  childComponent1Input: string = '';

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.childComponent1Input = this.parentValueModel.input1;
  }

  override isValid(): boolean {
    this.parentValueModel.input1 = this.childComponent1Input;
    return this.childComponent1Input.length >= 4;
  }
}
