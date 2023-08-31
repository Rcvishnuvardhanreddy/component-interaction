import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  isAllchildsValid: boolean = false;

  childsValidationStatus = [false, false, false];
  parentValue = new ChildsInput();

  title = 'comp-interaction-app';

  ngOnInit(): void {
  }

  onChildValidataionStatusChange(childNumber: number, $event: any) {
    this.childsValidationStatus[childNumber] = $event;
    this.isAllchildsValid = !this.childsValidationStatus.some(ele => ele == false)
  }
}

export class ChildsInput {
  input1: string;
  input2: string;
  input3: string;

  constructor() {
    this.input1 = '';
    this.input2 = '';
    this.input3 = '';
  }
}
