import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})

export class NumberService extends BaseService {

  	constructor(private http: HttpClient) { super(); }

  	/*Get all domains details*/
	getLocalAreaName() {
		return this.http.get(this.baseUrl+`all`);
	}

	getTableData() {
		let data: any[] = [
		  {checked: false, telstart: +44187397201, telend: +44187397201, weight: 1.0079, symbol: 'H'},
		  {checked: false, telstart: +44187397201, telend: +44187397201, weight: 4.0026, symbol: 'He'},
		  {checked: false, telstart: +44187397201, telend: +44187397201, weight: 6.941, symbol: 'Li'},
		  {checked: false, telstart: +44187397201, telend: +44187397201, weight: 9.0122, symbol: 'Be'},
		  {checked: false, telstart: +44187397201, telend: +44187397201, weight: 10.811, symbol: 'B'},
		  {checked: false, telstart: +44187397201, telend: +44187397201, weight: 12.0107, symbol: 'C'},
		  {checked: false, telstart: +44187397201, telend: +44187397201, weight: 14.0067, symbol: 'N'},
		  {checked: false, telstart: +44187397201, telend: +44187397201, weight: 15.9994, symbol: 'O'},
		  {checked: false, telstart: +44187397201, telend: +44187397201, weight: 18.9984, symbol: 'F'},
		  {checked: false, telstart: +44187397201, telend: +44187397201, weight: 20.1797, symbol: 'Ne'},
		  {checked: false, telstart: +44187397201, telend: +44187397201, weight: 1.0079, symbol: 'H'},
		  {checked: false, telstart: +44187397201, telend: +44187397201, weight: 2.0026, symbol: 'He'},
		  {checked: false, telstart: +44187397201, telend: +44187397201, weight: 6.941, symbol: 'Li'},
		  {checked: false, telstart: +44187397201, telend: +44187397201, weight: 9.0122, symbol: 'Be'},
		  {checked: false, telstart: +44187397201, telend: +44187397201, weight: 10.811, symbol: 'B'},
		  {checked: false, telstart: +44187397201, telend: +44187397201, weight: 12.0107, symbol: 'C'},
		  {checked: false, telstart: +44187397201, telend: +44187397201, weight: 14.0067, symbol: 'N'},
		  {checked: false, telstart: +44187397201, telend: +44187397201, weight: 15.9994, symbol: 'O'},
		  {checked: false, telstart: +44187397201, telend: +44187397201, weight: 18.9984, symbol: 'F'},
		  {checked: false, telstart: +44187397201, telend: +44187397201, weight: 20.1797, symbol: 'Ne'},
		  {checked: false, telstart: +44187397201, telend: +44187397201, weight: 1.0079, symbol: 'H'},
		  {checked: false, telstart: +44187397201, telend: +44187397201, weight: 4.0026, symbol: 'He'},
		  {checked: false, telstart: +44187397201, telend: +44187397201, weight: 6.941, symbol: 'Li'},
		  {checked: false, telstart: +44187397201, telend: +44187397201, weight: 22.0122, symbol: 'Be'},
		  {checked: false, telstart: +44187397201, telend: +44187397201, weight: 5.811, symbol: 'B'},
		  {checked: false, telstart: +44187397201, telend: +44187397201, weight: 12.0107, symbol: 'C'},
		  {checked: false, telstart: +44187397201, telend: +44187397201, weight: 14.0067, symbol: 'N'},
		  {checked: false, telstart: +44187397201, telend: +44187397201, weight: 15.9994, symbol: 'O'},
		  {checked: false, telstart: +44187397201, telend: +44187397201, weight: 21.9984, symbol: 'F'},
		  {checked: false, telstart: +44187397201, telend: +44187397201, weight: 20.1797, symbol: 'Ne'},
		];
		return data;
	}

	getCustomRefernceTableData() {
		let data: any[] = [
		  { NumberStart: +44187397201, NumberEnd: +44187397201, Inputbox: 1.0079, },
		  { NumberStart: +44187397201, NumberEnd: +44187397201, Inputbox: 4.0026, },
		  { NumberStart: +44187397201, NumberEnd: +44187397201, Inputbox: 6.941, },
		  { NumberStart: +44187397201, NumberEnd: +44187397201, Inputbox: 9.0122, },
		  { NumberStart: +44187397201, NumberEnd: +44187397201, Inputbox: 10.811,},
		  { NumberStart: +44187397201, NumberEnd: +44187397201, Inputbox: 12.0107,},
		]
		return data;
	}

	getTablColumns() {
		let displayedColumns: string[] = [
			'checked','telstart', 'telend', 'weight', 'symbol'
		];
		return displayedColumns;
	}

	getCustomReferenceTablColumns() {
		let displayedColumns: string[] = ['NumberStart','NumberEnd', 'Inputbox'];
		return displayedColumns;
	}
	
}
