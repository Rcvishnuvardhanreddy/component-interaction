import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  isAllchildsValid: boolean = false;
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
