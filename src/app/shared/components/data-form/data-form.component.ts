import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss'],
})
export class DataFormComponent implements OnInit {
  @Input() fields!: any;

  public form: FormGroup = new FormGroup({});

  ngOnInit() {
    this.fields.forEach((f: any) => {
      var control = new FormControl('');

      f.required !== undefined
        ? control.addValidators([Validators.required])
        : null;

      f.maxLength
        ? control.addValidators([Validators.maxLength(f.maxLength)])
        : null;

      this.form.addControl(f.formControlName, control);
    });
  }
}
