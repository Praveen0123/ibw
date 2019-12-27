import { FormGroup, FormControl } from '@angular/forms';

export function emailValidator(control: FormControl): {[key: string]: any} {
    var emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;    
    if (control.value && !emailRegexp.test(control.value)) {
        return {invalidEmail: true};
    }
}

export function eliminateSpaces(control: FormControl): {[key: string]: any} {
        
    if (control.value != null && control.value != "" && control.value.trim()  === "") {
        return {invalidInput: true};
    }
}

export function internationalPhoneNumber(control: FormControl): {[key: string]: any} {
    var internationalPhonePattern = /^(?!0+$)(?:\(?\+\d{1,3}\)?[- ]?|0)?\d{10}$/;    
    if (control.value && !internationalPhonePattern.test(control.value)) {
        return {invalidPhoneNumber: true};
    }
}

export function matchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
    return (group: FormGroup) => {
        let password= group.controls[passwordKey];
        let passwordConfirmation= group.controls[passwordConfirmationKey];
        if (password.value !== passwordConfirmation.value) {
            return passwordConfirmation.setErrors({mismatchedPasswords: true})
        }
    }
}