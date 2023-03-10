import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {TimelineService} from "@core/services/timeline.service";
import {Timeline} from "@data/interface/timeline";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  public form: UntypedFormGroup = {} as UntypedFormGroup;
  @Output() trigger: EventEmitter<unknown> = new EventEmitter<unknown>();

  constructor(
    private readonly formBuilder: UntypedFormBuilder,
    private timeline: TimelineService
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      message: this.formBuilder.control(null , [Validators.required, Validators.max(130)])
    });
  }

  submit(){
    if (this.form.invalid) {
      return;
    } else {
      this.timeline.addTimeline( {  message: this.form.get('message')?.value , date: new Date()  }  as Timeline)
      this.trigger.emit();
      this.form.reset();
    }
  }

}
