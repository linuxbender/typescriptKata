module ch.app.ruleEngine {

	"use strict";

	interface Engine<TResult> {

		DoWork(): TResult;
	}

	interface ResultType<TResult> {
		getResult: TResult;
		hitme: boolean;
	}

	interface BusinessRule<TRule> {

		Excecute(): TRule;
	}

	export class RuleEngine implements Engine<ResultType<number>> {

        private _rules: BusinessRule<ResultType<number>>[];

		constructor(rules: BusinessRule<ResultType<number>>[]) {
			this._rules = rules;
		}

		DoWork(): ResultType<number> {
			
			this._rules.map((rule) => {
				if(rule.Excecute().hitme){
					return rule;
				}
			});
			
			return undefined;
		}
	}
}