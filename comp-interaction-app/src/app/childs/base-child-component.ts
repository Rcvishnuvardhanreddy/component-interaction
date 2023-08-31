import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { ChildsInput } from '../parent/parent.component';

@Directive()
export abstract class BaseChildComponent {
    @Input() parentValueModel: ChildsInput = new ChildsInput();
    @Output() inputChange = new EventEmitter<boolean>();
    abstract isValid(): boolean;
    public isFormValid: boolean = false;

    onInputChange() {
        this.inputChange.emit(this.isValid());
    }

    getJSONValue() {
        return JSON.stringify(this.parentValueModel)
    }
}