namespace ch.app.dto {
    
    export enum Waehrung {
        CHF = 1,
        USD = 2,
        EUR = 3
    }
    
    export enum SaldierungStatus {
        IN_ERFASSUNG = 1,
        IST_ABGESCHLOSSEN = 2,
        OFFEN = 3
    }
    
    export enum ZahlungsArt {
        INTERNER_UEBERTRAG = 1,
        BANKZAHLUNG_INLAND = 2,
        BANKZAHLUNG_AUSLAND = 3,
        EZ_ROT = 4,
        EZ_ORANGE =5
    }
    
    export enum AufteilungsArt {
        IN_PROZENT = 1,
        IN_BETRAG = 2
    }
}