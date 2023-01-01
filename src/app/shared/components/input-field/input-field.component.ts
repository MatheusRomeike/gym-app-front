import { Component, forwardRef, Input, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  FormBuilder,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
  Validators,
} from '@angular/forms';
import { debounceTime } from 'rxjs';
import { AutoCompleteService } from '../../services/auto-complete.service';

const INPUT_FIELD_VALUE_ACESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputFieldComponent),
  multi: true,
};

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
  providers: [INPUT_FIELD_VALUE_ACESSOR],
})
export class InputFieldComponent implements ControlValueAccessor, OnInit {
  @Input() label?: string;
  @Input() type = 'text';
  @Input() isReadOnly = false;
  @Input() placeholder?: string;
  @Input() mask?: string;
  @Input() thousandSeparator?: any;
  @Input() prefix?: any;
  @Input() formControlName = '';
  @Input() form!: FormGroup;
  @Input() maxLength?: number;
  @Input() optionId: any = null;
  @Input() option: any = null;

  public filteredOptions: any = [];
  public activeAutoComplete = false;

  private innerValue: any;
  private options: any = null;

  constructor(private autoCompleteService: AutoCompleteService) {}

  ngOnInit() {
    if (this.option != null && this.optionId != null) {
      this.options = this.autoCompleteService.call(this.option);
      this.form
        .get(this.formControlName)
        ?.valueChanges.pipe(debounceTime(200))
        .subscribe((response) => {
          if (response && response.length) {
            this.filterData(response);
          } else {
            this.filteredOptions = [];
          }
        });
    }
  }

  closeAutoComplete() {
    setTimeout(() => (this.activeAutoComplete = false), 100);
    if (
      this.form.get(this.formControlName)?.value ==
      this?.filteredOptions[0]?.name
    ) {
      this.bindAutoComplete(this.filteredOptions[0]);
    } else {
      this.form.get(this.optionId)?.setValue(null);
    }
  }

  bindAutoComplete(a: any) {
    this.form.get(this.formControlName)?.setValue(a.name);
    this.form.get(this.optionId)?.setValue(a.value);
  }

  filterData(enteredData: any) {
    this.filteredOptions = Object.keys(this.options)
      .filter((key, index) => index < 6 && key.startsWith(enteredData))
      .map((key) => ({ name: key, value: this.options[key] }));
  }

  get value() {
    return this.innerValue;
  }

  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCb(v);
    }
  }

  onChangeCb: (_: any) => void = () => {};
  onTouchedCb: (_: any) => void = () => {};

  writeValue(v: any): void {
    this.value = v;
  }

  registerOnChange(fn: any): void {
    this.onChangeCb = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCb = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isReadOnly = isDisabled;
  }
}
