namespace ch.app.dto {
    
    export interface ISaldierungsAuftrag {
        id:number;
        kontoWaehrung: Waehrung;
        saldierungsBetrag:number;
        status: SaldierungStatus;
        nachricht:string;
        auftragsAdresse: IAdresse;
        aufteilungsArt: AufteilungsArt;
        zahlung: IZahlungElement[];
    }
    
    export class SaldierungsAuftrag implements ISaldierungsAuftrag {
        public id:number;
        public kontoWaehrung: Waehrung;
        public saldierungsBetrag:number;
        public status: SaldierungStatus;
        public nachricht:string;
        public auftragsAdresse: IAdresse;
        public aufteilungsArt: AufteilungsArt;
        public zahlung: IZahlungElement[];
    }
}