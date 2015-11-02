module ch.app.businessrule {

	"use strict";

	export class MaxValueRule implements BusinessRule {

		private _zahl: number;

		constructor(zahl:number) {
			this._zahl = zahl;
		}

		execute():boolean {
			if(this._zahl === 10)
			{
				return true;
			}
			return false;
		}
	}
}