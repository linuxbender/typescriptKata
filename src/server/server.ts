namespace ch.app {
    
    import autoMapper = server.automapper.AutoMapper;
    
    interface IOrt {
        plz: number;
        name: string;
    }
    
    class Ort implements IOrt {
        plz:number;
        name:string;
    }
    
    class PersonDto {
        constructor() {}
        vorname:string;
        alter:number;
    }
    
    class Person {
        name:string;
        vorname:string;
        alter:number;
        ort:IOrt;
    }
    
	export class Server {

		private _env:string;
        private person:Person;
        private personDto:PersonDto;
        private baseCalculator:BasicCalculator;
        private autoMapper:AutoMapper;

		constructor(env:string) {
			this._env = env;
            this.initData();
            this.baseCalculator = new BasicCalculator(100);
            console.log('Der Wert ist :', this.baseCalculator.add(25).multiply(2).currentValue());
            
            //this.autoMapper = new AutoMapper(10);
            //
                AutoMapper.map<Person>();
		}
        
        public MapPerson():void {
            // let dto = autoMapper.map.from<Person>().to<PersonDto>();
        }
        
        private mapTo(map:any, from:any[]):void {
            // console.log( map instanceof PersonDto);
            from.forEach(t => {
                Object.getOwnPropertyNames(t).forEach(name => {
                    //console.log(t[name].constructor);
                    let myType = t[name].constructor;
                    console.log(myType.name);
                    //console.log(typeof myType);
                    if(typeof myType === 'function') {
                        //console.log('dannn');
                        //console.log(Object.prototype.toString.call(myType));
                        //console.log(myType.name);
                        //console.log(typeof myType); 
                        if(myType.name === 'Ort') {
                            //console.log('drinn..');
                        }
                    }
                    //console.log(Object.keys(t));
                    map[name] = t[name];
                });
            });
        }
        
        private initData():void {
            
            this.person = new Person();
            this.person.name = "Daniel";
            this.person.vorname = "Glenn";
            this.person.alter = 41;
            this.person.ort = new Ort();
            this.person.ort.plz = 5621;
            this.person.ort.name = 'Zufikon'; 
            
            this.personDto = new PersonDto();
            
            this.mapTo(this.personDto, [this.person]);
            //console.log(this.personDto);
        }
	}
    
    class AutoMapper {
        
        public constructor(protected value:number = 0) {}
        
        public static map<T>():void {
            let des:T;
            console.log('Demo:  ');
        }
    }
    
    // Fluend with extend the class return this will add new calculation metheds
    class BasicCalculator {
        
        public constructor(protected value: number = 0) { }
        
        public currentValue(): number {
            return this.value;
        }
        
        public add(operand: number): this {
            this.value += operand;
            return this;
        }
        
        public multiply(operand: number): this {
            this.value *= operand;
            return this;
        }
    }
}

// alias
import Server = ch.app.Server;

var app = new Server("debug");