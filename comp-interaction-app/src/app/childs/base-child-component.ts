import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Directive()
export abstract class BaseChildComponent {
    @Input() parentValueModel: FormGroup = new FormGroup({});
    @Input() formName: string = '';

    @Output() inputChange = new EventEmitter<boolean>();

    public isFormValid: boolean = false;
    myForm: FormGroup = new FormGroup({});
}