import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-verifying-institute',
  templateUrl: './verifying-institute.component.html',
  styleUrls: ['./verifying-institute.component.css']
})
export class VerifyingInstituteComponent implements OnInit {


  q: string = "";
  iv: string = "";
  token: string = "";
  composition: string = "";

  constructor(private route: ActivatedRoute, private authService: AuthService, private router: Router, private toastr: HotToastService) { }

  ngOnInit() {
   this.route.queryParamMap.subscribe(params => { 
      this.q = params.get('q')!;
      this.iv = params.get('iv')!;
      this.token = params.get('token')!;;
      this.composition = this.q + "/" + this.iv + "/" + this.token;
      console.log("Compostion", this.composition);

      this.authService.handle_verify_institution_email(this.composition).subscribe({complete: () => {
        console.log("Success");
        this.router.navigate(["/"]);
        this.toastr.success("Institution Registration Complete!")
      }, error: (e) => {
        console.log("Error is", e);
        this.toastr.error("Token is Expired or May be Invalid Please SignUp Again")
        this.router.navigate(["/onboarding/institution"])
      }
    });

    });
  }

}


// 91bf9b7343a56d0977b266ba337338ce19b9820c4c69caa5bc25234c9b894b96/b80587c81a1ad5a1ec25520f2e258a62/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbmNyeXB0ZWROYW1lIjoiNTY4MmM2YmQ4ZmRlNmJkMTNjMzM5NGQ1YTA1NTUxM2UiLCJlbWFpbCI6ImFzaHV0b3NoLmt1bWJoYXJAbW9kZXJuY29lLmVkdS5pbiIsImVuY3J5cHRlZHBob25lTm8iOiJlZjRjMzIzMTYzNzM1ZTNjMjQxMzYzNTRjYTczNzFjMiIsImVuY3J5cHRlZExvY2F0aW9uIjoiNWQ5ZGMyNjhmMWZjYzIwOTY2ZDhlMmU5NzkxNmU2ZGMiLCJlbmNyeXB0ZWRXZWJzaXRlIjoiYmRhOWViNTc0MDk0ODcwNTkxYTdlNWRlYzU4MjE4YzFkM2E4Mzk1MzE3NTU5ZmRkNjg4NGRmMDJlOWQ2NmUzMCIsIm93bmVyVXNlcklkIjoiNjNmMGM0MzZjNDgyZTNkMzVlMjRiMDU1IiwicGFzc3dvcmQiOiIkMmIkMTAkVlFqUUVrUnlIMmYvZ1daTi5CZlpGT29vbmI0WlJqb1ovU1hGd3Y0UWNEc0VrczBJY2dHQmkiLCJpYXQiOjE2NzY4MjM3ODcsImV4cCI6MTY3NjgyNTU4N30.8nqR6YhuzZPtxJyqcO8Z3JqOP49ljf5rk34FNxVs8VI