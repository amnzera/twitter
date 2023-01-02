import {Component, OnInit} from '@angular/core';
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

  constructor(
    private readonly formBuilder: UntypedFormBuilder,
    private timeline: TimelineService
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      message: this.formBuilder.control(null , [Validators.required, Validators.max(130), Validators.min(3)]),
      date: this.formBuilder.control(new Date())
    });
  }

  submit(){
    this.timeline.addTimeline(this.form.value as Timeline)
  }

}