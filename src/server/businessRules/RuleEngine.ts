namespace ch.app.businessRules {

	import BusinessRule = ch.app.businessrule.IBusinessRule;
	import ISaldierungsAuftrag = ch.app.dto.ISaldierungsAuftrag;
    
    export interface ISpec<TResult> {
        execute():TResult;
    }

	interface IFactoryEngine<T> {
		process:ISpec<T>[]
		DoWork(): T;
	}

	export class RuleEngine {
		static SaldierungsAuftragSpec(saldierungsAuftrag:ISaldierungsAuftrag): boolean {
			return new SaldierungsAuftragFactory(saldierungsAuftrag).DoWork();
		}
	}
	
	
	class SaldierungsAuftragFactory implements IFactoryEngine<boolean> {
		
		public process:ISpec<boolean>[];
		
		constructor (saldierungsAuftrag:ISaldierungsAuftrag) {
			this.process.push(new RestbetragIstGesetzt(saldierungsAuftrag));
			this.process.push(new SaldierungsAuftragHatMaxDreisigZahlungen(saldierungsAuftrag))
		}
		
		public DoWork():boolean {
			this.process.forEach((item:ISpec<boolean>) => {
				if(item.execute()) {
					return true;
				}
			});		
			return false;
		}
	}
}