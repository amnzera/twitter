import {Component, ViewChild} from '@angular/core';
import {TimelineComponent} from "./layout/timeline/timeline.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'twitter';

  @ViewChild('timelineComponent') timeline!:TimelineComponent

  emitterLoad(){
    this.timeline.loadTimeline();
  }
}
