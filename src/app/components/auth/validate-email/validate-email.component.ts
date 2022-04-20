import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MutationResult } from 'apollo-angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-validate-email',
  templateUrl: './validate-email.component.html',
  styleUrls: ['./validate-email.component.scss']
})
export class ValidateEmailComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private authService: AuthService) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams
      .subscribe(params => {
        const userId = params['userId'];
        const code = params['code'];

        this.authService.verifyEmail({userId, code})
          .subscribe({
            next: (result) => this.successHandler(result),
            error: (result) => this.errorHanlder(result),
          })
      })
  }

  errorHanlder(err: any) {
    console.log(err);
  }

  successHandler(result: MutationResult) {
   const success = result.data.verifyEmail;
   if(success){
    alert('E-mail validado com sucesso!')
  }
   console.log(result)
  }

}
