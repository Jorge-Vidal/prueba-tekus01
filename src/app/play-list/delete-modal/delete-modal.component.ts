import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Card } from '../../models/Card';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent implements OnInit {

	@Input() card: Card;
	@Output() deleteCardConfirmEvent = new EventEmitter<Card>();
	@Output() closeDeleteCardModalEvent = new EventEmitter<boolean>;
  	constructor() { }

	ngOnInit() {
	}

	confirmDelete(card) {
	   this.deleteCardConfirmEvent.emit(card)
	   this.closeModal()
	}

	closeModal() {
	   this.closeDeleteCardModalEvent.emit(true)
	}

}
