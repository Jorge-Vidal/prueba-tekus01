import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../../models/Card';

@Component({
  selector: 'app-card-content',
  templateUrl: './card-content.component.html',
  styleUrls: ['./card-content.component.css']
})
export class CardContentComponent implements OnInit {

  @Input() item: Card;
  @Input() index: number;
  @Output() deleteCardEvent = new EventEmitter<Card>();

  constructor() { }

  ngOnInit() {
  }

  validateTemplateType(type) {
    if(type=="image")
  	return "fa-image"

  	if(type=="video")
  	return "fa-video"

  	return "fa-file-alt"
  }

  cardToggleActive(card) {
    card.Active = !card.Active
  }

  deleteCard(card) {
   this.deleteCardEvent.emit(card)
  }

  onMove(card: Card, position: number) {
      console.log(card, position);
  }


}
