namespace ch.app.businessRules {

	import BusinessRule = ch.app.businessrule.IBusinessRule;
	
	export interface IRule<TResult> {
        execute(): TResult;
    }
    
    export interface ISpec<TResult> {
        execute():TResult;
    }

	interface Engine<T> {
		DoWork(): T;
	}

	export class RuleEngine {
	}
}