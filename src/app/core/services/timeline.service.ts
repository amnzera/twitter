import { Injectable } from '@angular/core';
import {Timeline} from "@data/interface/timeline";

@Injectable({
  providedIn: 'root'
})
export class TimelineService {

  timeline: Timeline[] = [];

  constructor() { }

  addTimeline(timeline: Timeline){
    this.timeline.push(timeline);
    this.keepDataLocal();
  }

  removeTimeline(dataItem: Timeline){
    this.timeline = this.timeline.filter((item:Timeline) => item !== dataItem)
    this.keepDataLocal();
  }


  keepDataLocal(){
    localStorage.setItem('timelineState' , JSON.stringify(this.timeline))
  }

  getTimelineStorage(){
    // @ts-ignore
    const temp = JSON.parse(localStorage.getItem('timelineState')) as Timeline[];
    return this.timeline = temp;
  }
}
