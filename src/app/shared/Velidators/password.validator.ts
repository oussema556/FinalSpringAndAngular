import {AbstractControl, ValidationErrors} from "@angular/forms";

export class PasswordValidator{
  static noSpace(control: AbstractControl):ValidationErrors | null{
    if ((control.value as string).indexOf(' ') >= 0)
      return {hasSpace: true}
    return null

  }
}
