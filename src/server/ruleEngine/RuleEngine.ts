module ch.app.ruleEngine {

	"use strict";

	interface Engine<T> {

		DoWork(): T;
	}

	interface ResultType<TResult> {
		hitme: boolean;
		getResult: TResult;
	}

	interface BusinessRule<TResult> extends ResultType<TResult> {
		Excecute(): TResult;
	}

	export class RuleEngine<TResult> implements Engine<TResult> {

        private _rules: BusinessRule<BusinessRule<TResult>>[];

		constructor(rules: BusinessRule<BusinessRule<TResult>>[]) {
			this._rules = rules;
		}

		DoWork(): TResult {
			
			this._rules.map((rule) => {
				if(rule.Excecute().hitme){
					return rule;
				}
			});
			
			return undefined;
		}
	}
}