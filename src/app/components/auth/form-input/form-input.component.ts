import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';
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
  @Input() errorMessage!: string;
  @Input() callbackVerifyError: ()=> boolean = ()=> false;
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
    return this.callbackVerifyError() ? 'invalid' : '';
  }
}
