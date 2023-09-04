import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  isAllchildsValid: boolean = false;
  title = 'comp-interaction-app';

  parentForm: any = [];

  constructor() {
    this.parentForm = new FormGroup({
      child1: new FormGroup({ }),
      child2: new FormGroup({ }),
      child3: new FormGroup({ }),
    });
  }

  ngOnInit(): void {
  }
}
