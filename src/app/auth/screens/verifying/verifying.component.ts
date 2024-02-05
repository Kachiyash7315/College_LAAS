import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verifying',
  templateUrl: './verifying.component.html',
  styleUrls: ['./verifying.component.css']
})
export class VerifyingComponent implements OnInit {

  token: string = "";

  constructor(private route: ActivatedRoute, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.token = params.get('q')!;
      this.authService.handle_verify_email(this.token).subscribe((response: any) => {
        console.log(response);
        localStorage.setItem('token', `${response.data}`)
        this.router.navigate(['/']);
      },);
    });
  }




}
