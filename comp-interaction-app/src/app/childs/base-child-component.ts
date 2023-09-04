import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    template: ''
})
export abstract class BaseChildComponent {
    @Input() parentForm: FormGroup = new FormGroup({});
    @Input() formName: string = '';

    myForm: FormGroup = new FormGroup({});

    intializeForm() {
        this.myForm = this.parentForm.get(this.formName) as FormGroup;
    }
}