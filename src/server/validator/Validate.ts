namespace ch.app.validator {

	/*export interface Validate {
		isValid(): Boolean;
	}*/
    
    export interface IValidate {
       IsValid<T>():T; 
    }
}