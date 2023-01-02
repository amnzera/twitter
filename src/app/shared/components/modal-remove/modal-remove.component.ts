import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {Timeline} from "@data/interface/timeline";

@Component({
  selector: 'app-modal-remove',
  templateUrl: './modal-remove.component.html',
  styleUrls: ['./modal-remove.component.scss']
})
export class ModalRemoveComponent {

  @ViewChild('template') modalRef!:BsModalRef
  @Output() removeEmitter: EventEmitter<unknown> = new EventEmitter<unknown>();

  constructor(private modalService: BsModalService) {}


  delete(){
    this.removeEmitter.emit();
    this.closeModal()
  }

  openModal() {
      // @ts-ignore
      this.modalRef = this.modalService.show(this.modalRef);
  }

  closeModal() {
    this.modalService.hide();
  }

  ngOnInit(): void {
  }
}
