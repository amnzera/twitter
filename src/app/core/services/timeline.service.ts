import { Injectable } from '@angular/core';
import {Timeline} from "@data/interface/timeline";

@Injectable({
  providedIn: 'root'
})
export class TimelineService {

  public timelineArray: Timeline[] = []

  constructor() { }

  addTimeline(timeline: Timeline){
    this.timelineArray.push(timeline);
    this.keepDataLocal();
  }

  removeTimeline(dataItem: Timeline){
    this.timelineArray = this.timelineArray.filter((item:Timeline) => item !== dataItem)
    this.keepDataLocal();
  }


  keepDataLocal(){
    localStorage.setItem('timelineState' , JSON.stringify(this.timelineArray))
  }

  getTimelineStorage(){
    if(localStorage.getItem('timelineState')){
    // @ts-ignore
      let temp = JSON.parse(localStorage.getItem('timelineState')) as Timeline[];
      this.timelineArray = temp;
      return temp;
    } else {
      return
    }

  }
}
