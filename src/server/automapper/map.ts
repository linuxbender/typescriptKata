namespace server.automapper {

    interface IMap {
        from<T>():IFrom;
    }
    
    interface IFrom {
        to<T>():this;
    }

    export class AutoMapper {
            static map:IMap;
    }
    
    export class Map implements IMap {
        
        from<T>() : IFrom {
            return new Form(this).to<T>();
        }
    }
    
    export class Form implements IFrom {
        
        constructor(private from:IMap) {}
        
        to<T>(): this {
            return this;
        }
    }
    // map<PersonDto>().From<Person>()
    // .ThatSets(tgt => tgt.adresse1).From(src => src.adresse)
    // .IgnorSourceProperty(x=> x.Notes).Create();
    // let map = AutoMapper.map;
    // let normal = map.from<PersonDto>().to<Person>();
    
    // let excludeProperty = map.from<PersonDto>().to<Person>().prop<>
}
