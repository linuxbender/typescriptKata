module ch.app.ruleEngine {

	"use strict";

	interface RuleEngine<TResult> {

		DoWork(): TResult;
	}

	interface RuleType<TResult> {
		getResult: TResult;
		hitme: boolean;
	}

	interface BusinessRule<TRule> {

		Excecute(): TRule;
	}

	export class RuleEngine implements RuleEngine<RuleType<number>> {

        private _rules: BusinessRule<RuleType<number>>[];

		constructor(rules: BusinessRule<RuleType<number>>[]) {
			this._rules = rules;
		}

		DoWork(): RuleType<number> {
			
			this._rules.map((rule) => {
				if(rule.Excecute().hitme){
					return rule;
				}
			});
			
			return undefined;
		}
	}
}