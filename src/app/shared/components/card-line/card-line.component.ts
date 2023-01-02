import {Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {Timeline} from "@data/interface/timeline";
import {ModalRemoveComponent} from "../modal-remove/modal-remove.component";

@Component({
  selector: 'app-card-line',
  templateUrl: './card-line.component.html',
  styleUrls: ['./card-line.component.scss']
})
export class CardLineComponent implements OnInit, OnDestroy {


  @Input() timeItem: Timeline | undefined;
  @Input() index: number | undefined;
  @Output() removeEmitter: EventEmitter<Timeline> = new EventEmitter<Timeline>();

  public dateNow: string = '';
  private clockHandle: any;
  @ViewChild('modalRemoveComponent') modalRef!:ModalRemoveComponent

  ngOnInit(): void {
   this.loopforTime();
  }

  loopforTime(){
    this.clockHandle = setInterval(()=> {
      // @ts-ignore
      var begin = new Date(this.timeItem?.date);
      var current = new Date();
      var diference = (new Date(current.valueOf() - begin.valueOf())).toISOString();


      if(Date.parse(diference) < 60000) {
        this.dateNow = 'Agora';
      } else {
        this.dateNow = new Date().toLocaleString().slice(0, -3);
      }

    },1000);

  }

  remove(): void {
    this.removeEmitter.emit(this.timeItem);
  }

  showModal(){
    this.modalRef.openModal();
  }

  ngOnDestroy(): void {
    clearInterval(this.clockHandle);
  }

}
