import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';
import { IErrorFormField } from 'src/app/common/IError';
import { AuthFormStyleService } from '../auth-form-style.service';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
  viewProviders: [
    {
        provide: ControlContainer,
        useExisting: FormGroupDirective
    }
]
})
export class FormInputComponent implements OnInit {

  @Input() id!: string;
  @Input() type!: string;
  @Input() placeholder!: string;
  @Input() controlName!: string;
  @Input() label!: string;
  @Input() checkErros: IErrorFormField[] = []
  @Input() icon!: string;

  constructor(
    private authFormStyleService: AuthFormStyleService,
  ) {}

  ngOnInit(): void {
    
  }

  onChange(event: Event) {
    this.authFormStyleService.handleInputChange(event);
  }

  checkError(){
    return !!this.errorHandler(this.checkErros) ? 'invalid' : '';
  }

  showError(){
    const error = this.errorHandler(this.checkErros);
    if(error) return error 
    
    return
  }

  errorHandler(errors: IErrorFormField[]){
    console.log(errors)
    for(let error in errors){
      if(errors[error].isValid){
        return errors[error].message
      }
    }
    return false;
  }
}
