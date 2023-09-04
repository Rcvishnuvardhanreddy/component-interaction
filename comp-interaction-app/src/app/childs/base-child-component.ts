import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
// import { ChildsInput } from '../parent/parent.component';

@Directive()
export abstract class BaseChildComponent {
    @Input() parentValueModel: FormGroup = new FormGroup({});
    @Input() formName: string = '';
    @Output() inputChange = new EventEmitter<boolean>();
    
    abstract isValid(): boolean;
    public isFormValid: boolean = false;

    myForm: FormGroup = new FormGroup({});

    onInputChange() {
        this.inputChange.emit(this.isValid());
    }

    getJSONValue() {
        return JSON.stringify(this.myForm.value)
    }
}