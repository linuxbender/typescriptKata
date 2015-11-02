module ch.app {

	"use strict";

	export class App {

		private _env:string;

		constructor(env:string) {
			this._env = env;
		}		
	}
}

"use strict";

// alias
import App = ch.app.App;

var app = new App("d");