import { Component, OnInit } from '@angular/core';
import { AuthFormStyleService } from '../auth-form-style.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private authFormStyleService: AuthFormStyleService) { }

  ngOnInit(): void {
  }


  onChange(event: Event){
    this.authFormStyleService.handleInputChange(event);
  }

}
