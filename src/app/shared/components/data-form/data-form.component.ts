import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

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
      console.log(f.formControlName);
      this.form.addControl(f.formControlName, f.control);
    });
    console.log(this.form);
  }
}
