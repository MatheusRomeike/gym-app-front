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
      this.autoCompleteService
        .callApi(this.parametroBusca, this.option)
        .subscribe((result: any) => {
          this.result = result.data;
        });
    }
  }

  bindAutoComplete(event: any) {
    this.bindAttributesForAutoComplete.emit(event.text);
  }
}
