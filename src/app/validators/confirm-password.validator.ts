import { FormGroup } from "@angular/forms"

export const confirmPasswordValodator = (controlName:string, controlNameToMatch:string)=>{
    return (formGroup:FormGroup)=>{
        let control = formGroup.controls[controlName];
        let controlToMatch = formGroup.controls[controlNameToMatch];
        if(controlToMatch.errors && !controlToMatch.errors['confirmPasswordValodator']){
           return;
        }
        if(control.value !== controlToMatch.value){
            controlToMatch.setErrors({confirmPasswordValodator: true})
        } else{
            controlToMatch.setErrors(null);
        }
    }
}

