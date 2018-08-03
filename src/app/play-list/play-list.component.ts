import { Component, OnInit } from '@angular/core';
import { Card } from '../models/Card';
import { CardService } from '../services/card-service/card.service';

@Component({
  selector: 'app-play-list',
  templateUrl: './play-list.component.html',
  styleUrls: ['./play-list.component.css']
})
export class PlayListComponent implements OnInit {

  	constructor(
  		private cardService: CardService,
	) {

  	}

  	cards:Card[] = new Array();
  	openModalDelete: boolean = false;
  	currentDeleteCard: Card ;

  	ngOnInit() {
		// se suscribe al triget que abre y cierra el modal editar cover
	    this.cardService.getAllCards()
	    .subscribe(
			success => {
	    		this.cards = success
	    	},
	    	error =>  {
	    	console.log('ERROR::::::::::::::::::::::::::',error)
		    }
	    );
  	}

  	deleteCard(card){
	  	var index = this.cards.indexOf(card, 0);
		if (index > -1) {
		    this.cards.splice(index, 1);
		}
  	}

  	openDeleteCardModal(card){
  		this.openModalDelete = true
  		this.currentDeleteCard = card
  	}

  	closeDeleteCardModal(){
  		this.openModalDelete = false
  		this.currentDeleteCard = null
  	}

}
