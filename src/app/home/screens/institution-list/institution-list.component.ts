import { Component, OnInit } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { Institute } from 'src/app/models/institute';
import { AuthService } from 'src/app/services/auth.service';
import { InstitutionService } from 'src/app/services/institution.service';

@Component({
  selector: 'app-institution-list',
  templateUrl: './institution-list.component.html',
  styleUrls: ['./institution-list.component.css']
})
export class InstitutionListComponent implements OnInit {

  constructor(private institutions: InstitutionService, private toastr: HotToastService, private auth: AuthService) { }


  institutionsList: Institute[] = [];
  ngOnInit(): void {
    if(this.auth.isAuthenticated()){
      this.handleGetAllInstitutions();
    }
  }

  handleGetAllInstitutions() {
    this.institutions.getAllCreatedInstitutions().subscribe((data: any)=>{
      console.log(data);
      this.institutionsList = data.data;
      console.log(this.institutionsList);
    });
  }







}
