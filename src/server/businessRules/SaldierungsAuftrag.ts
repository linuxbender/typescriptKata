namespace ch.app.businessRules {
    
    import ISaldierungsAuftrag = ch.app.dto.ISaldierungsAuftrag;
    import IZahlungElement = ch.app.dto.IZahlungElement;
    
    export class RestbetragIstGesetzt implements ISpec<boolean> {
        
        constructor(protected saldierungsAuftrag: ISaldierungsAuftrag) {}
        
        public execute(): boolean {
            return this.saldierungsAuftrag.zahlung 
            && this.saldierungsAuftrag.zahlung.length > 0 
            && this.saldierungsAuftrag.zahlung.some((item:IZahlungElement) => item.restBetrag == true );
        }
    }
    
    export class SaldierungsAuftragHatMaxDreisigZahlungen implements ISpec<boolean> {
        
        constructor(protected saldierungsAuftrag: ISaldierungsAuftrag) {}
        
        public execute(): boolean {
            return this.saldierungsAuftrag.zahlung && this.saldierungsAuftrag.zahlung.length <= 30;
        }
    }
}