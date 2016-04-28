namespace ch.app.dto {

    export interface IZahlung {
        id: number;
        betrag: number;
        waehrung: Waehrung;
    }
    
    export interface IZahlungElement extends IZahlung {
        restBetrag:boolean;
        prozent:number;
        transationsWaehrung: Waehrung;
        zahlungsArt: ZahlungsArt
    }

    export class Zahlung implements IZahlung {
        public id: number;
        public betrag: number;
        public waehrung: Waehrung;
    }

    export class ZahlungElement implements IZahlungElement {
        public id: number;
        public betrag: number;
        public waehrung: Waehrung;
        public restBetrag:boolean;
        public prozent:number;
        public transationsWaehrung: Waehrung;
        public zahlungsArt: ZahlungsArt;
    }
}