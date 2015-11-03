module ch.app {

	"use strict";

	export class Server {

		private _env:string;

		constructor(env:string) {
			this._env = env;
		}		
	}
}

"use strict";

// alias
import Server = ch.app.Server;

var app = new Server("d");