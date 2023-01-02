import {Component, OnInit} from '@angular/core';
import { TimelineService } from '@core/services/timeline.service';
import { Timeline } from '@data/interface/timeline';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit{

  public timeline: Timeline[] = [];

  constructor(private timelineService: TimelineService) {
  }

  ngOnInit(): void {
    if(this.timeline){
     this.loadTimeline()
    }
  }

  loadTimeline(){
    this.timeline = this.timelineService.getTimelineStorage();
  }

  removeItem(event: Timeline) {
    this.timelineService.removeTimeline(event)
    this.loadTimeline()
  }

}
