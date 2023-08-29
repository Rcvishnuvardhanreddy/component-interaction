import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isAllchildsValid: boolean = false;

  childsValidationStatus = [false, false, false];
  parentValue = new ChildsInput();

  ngOnInit(): void {
  }

  title = 'comp-interaction-app';

  onChildValidataionStatusChange(childNumber: number, $event: any) {
    this.childsValidationStatus[childNumber] = $event;
  
    this.isAllchildsValid = !this.childsValidationStatus.some(ele => ele == false)
  }


  updateParentModel($event : ChildsInput){
    this.parentValue = $event;
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
