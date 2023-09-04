import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  isAllchildsValid: boolean = false;

  childsValidationStatus = [false, false, false];

  title = 'comp-interaction-app';

  parentForms: any = [];

  constructor() {
    this.parentForms = new FormGroup({
      child1: new FormGroup({ }),
      child2: new FormGroup({ }),
      child3: new FormGroup({ }),
    });
  }

  ngOnInit(): void {
  }

  onChildValidataionStatusChange(childNumber: number, $event: any) {
    this.childsValidationStatus[childNumber] = $event;
    this.isAllchildsValid = !this.childsValidationStatus.some(ele => ele == false)
  }

  areAllChildGroupsValid() {
    const childGroupNames = Object.keys(this.parentForms.controls);

    for (const childGroupName of childGroupNames) {
      const childGroup = this.parentForms.get(childGroupName) as FormGroup;

      if (!childGroup.valid) {
        return false; // If any child group is invalid, return false
      }
    }

    return true; // All child groups are valid
  }
}

// export class ChildsInput {
//   input1: string;
//   input2: string;
//   input3: string;

//   constructor() {
//     this.input1 = '';
//     this.input2 = '';
//     this.input3 = '';
//   }
// }
