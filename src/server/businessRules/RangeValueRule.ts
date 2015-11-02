module ch.app.businessrule {

	"use strict";

	export class RangeValueRule implements BusinessRule {

		private _zahl:number; 

		constructor(zahl:number) {
			this._zahl = zahl;
		}

		execute():boolean {
			if (this._zahl <= 10 && this._zahl >= 0) {
				return true;
			}
			return false;
		}
	}
}