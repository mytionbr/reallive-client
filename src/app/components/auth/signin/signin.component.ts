import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthFormStyleService } from '../auth-form-style.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  errors = "";

  constructor(private authFormStyleService: AuthFormStyleService) { }

  ngOnInit(): void {
  }

  onChange(event: Event){
    this.authFormStyleService.handleInputChange(event);
  }

}
