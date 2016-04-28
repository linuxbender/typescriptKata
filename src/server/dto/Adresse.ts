namespace ch.app.dto {
    
    export interface IAdresse {
        adressZeile1:string;
        adressZeile2:string;
        adressZeile3:string;
        adressZeile4:string;
    }
    
    export class Adresse implements IAdresse {
        public adressZeile1:string;
        public adressZeile2:string;
        public adressZeile3:string;
        public adressZeile4:string;
    }
}