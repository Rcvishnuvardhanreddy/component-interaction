import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { ChildsInput } from '../app.component';

@Directive()
export abstract class BaseChildComponent {
    @Input() parentValueModel: ChildsInput = new ChildsInput();

    @Output() inputChange = new EventEmitter<boolean>();
    @Output() onParentValueModelUpdated = new EventEmitter<ChildsInput>();


    abstract isValid(): boolean;

    onInputChange() {
        this.inputChange.emit(this.isValid());
    }

    getJSONValue() {
        return JSON.stringify(this.parentValueModel)
    }
}