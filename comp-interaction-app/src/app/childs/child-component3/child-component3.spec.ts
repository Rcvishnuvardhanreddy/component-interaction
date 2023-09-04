import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { ChildComponent3Component } from './child-component3.component';

describe('ChildComponent3Component', () => {
  let component: ChildComponent3Component;
  let fixture: ComponentFixture<ChildComponent3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChildComponent3Component],
      imports: [ReactiveFormsModule], // Import ReactiveFormsModule for working with forms
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildComponent3Component);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize myForm based on parentForm and formName', () => {
    const parentForm = new FormGroup({
      child1: new FormGroup({}),
      child2: new FormGroup({}),
      child3: new FormGroup({}),
    });
  
    component.parentForm = parentForm;
    component.formName = 'child2';
  
    fixture.detectChanges();
  
    // Trigger the ngOnInit lifecycle hook
    component.ngOnInit();
  
    // Check that the myForm is either null or a FormGroup
    const myForm = component.myForm;
    expect(myForm).toBeTruthy(); // Check that myForm is defined (not null or undefined)
  
    if (myForm instanceof FormGroup) {
      // If myForm is a FormGroup, check that it matches the expected formName
      expect(myForm).toBe(component.parentForm.get('child2') as FormGroup);
    }
  });

  it('should add the input3 control with required and minLength validators', () => {
    const parentForm = new FormGroup({
      child1: new FormGroup({}),
      child2: new FormGroup({}),
      child3: new FormGroup({}),
    });

    component.parentForm = parentForm;
    component.formName = 'child2';

    fixture.detectChanges();

    // Trigger the ngOnInit lifecycle hook
    component.ngOnInit();

    // Check that the input3 control is added to myForm
    expect(component.myForm.contains('input3')).toBe(true);

    // Check that the input3 control has the required and minLength(5) validators
    const input3Control = component.myForm.get('input3');
    expect(input3Control).toBeTruthy();
    expect(input3Control?.hasError('required')).toBe(true);

    // Set a valid value for input3 to pass minLength(5) validation
    input3Control?.setValue('ValidInput');
    expect(input3Control?.hasError('minlength')).toBe(false);

    // Set an invalid value for input3 to fail minLength(5) validation
    input3Control?.setValue('Shor');
    expect(input3Control?.hasError('minlength')).toBe(true);
  });
});
