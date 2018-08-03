import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable, Subject, pipe } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable()
export class CardService {
	private url = 'http://cdn.tekus.co/Media/channel-data.json';

	constructor(
		private http: Http,
	) { }

	/* ---------------------- cards ----------------------------*/
	getAllCards(): Observable<any> {

		let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
		let options = new RequestOptions({ 'headers': headers });


		return this.http.get(this.url, options)
			.pipe(map(this.extractData))
        	.pipe(catchError(this.handleError))
	}



	//resultados
	private extractData(res: Response) {
		//obtener los datos
	    let body = res.json();
	    return body || { };
  	}

  	//mensajes de error
  	private handleError (error: Response | any) {
	    // mostrar los errores
	    let errMsg: Array<any>;
	    if (error instanceof Response) {
	      const body = error.json() || '';
	      const err = body || JSON.stringify(body);
	      errMsg = err;
	    } else {
	      errMsg = error.message ? error.message : error.toString();
	    }
	    return Observable.throw(errMsg);
  	}


}
