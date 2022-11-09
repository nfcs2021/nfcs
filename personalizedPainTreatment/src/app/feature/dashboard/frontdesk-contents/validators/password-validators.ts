import { AbstractControl, FormControl, ValidationErrors, Validator, ValidatorFn } from "@angular/forms";
export class PasswordValidators {
    constructor() {}

    static patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
      return (control: AbstractControl): { [key: string ]: any } => {
        if (!control.value) {
          // if the control value is empty return no error.
          return null as any;
        }
  
        // test the value of the control against the regexp supplied.
        const valid = regex.test(control.value);
  
        // if true, return no error, otherwise return the error object passed in the second parameter.
        return valid ? null as any : error;
      };
    }

    

}

export function fileTypeValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | any => {
      let fileName = control.value;
      let ext = fileName.substring(fileName.lastIndexOf('.') + 1);
      return (ext === 'pdf' || ext === 'pdf') ? null as any : {'invalidFile': true};
  };
}

