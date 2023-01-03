import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { AutoCompleteService } from './auto-complete.service';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss'],
})
export class AutoCompleteComponent implements OnChanges {
  @Input() parametroBusca = '';
  @Input() option: any = null;
  @Output() bindAttributesForAutoComplete = new EventEmitter<any>();

  public result: any = null;

  constructor(private autoCompleteService: AutoCompleteService) {}

  ngOnChanges() {
    if (this.parametroBusca.length > 2) {
      this.result = this.autoCompleteService.callApi(
        this.parametroBusca,
        this.option
      );
    }
  }

  bindAutoComplete(event: any) {
    this.bindAttributesForAutoComplete.emit({
      name: event.name,
      value: event.value,
    });
  }
}
