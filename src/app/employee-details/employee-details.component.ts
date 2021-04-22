import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


export interface IUser {
  employeeID: string;
  emailID: number;
  FirstName: string;
  LastName: string;
  Organization: string;
}

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  searchCriteria: string = '';
  sortBy: string = '';
  paginatorForm: FormGroup = new FormGroup({});
  APIDATA: Array<IUser> = [];
  displayedColumns: string[] = ['EmployeeID', 'EmailID', 'FirstName', 'LastName', 'Organization'];
  searchOptions = ['FirstName', 'LastName', 'EmployeeID'];
  sortOptions = ['FirstName', 'LastName', 'EmailID', 'EmployeeID', 'Organization']

  ngOnInit(): void {
    this.paginatorForm = new FormGroup({
      Offset: new FormControl(0, [Validators.required]),
      Limit: new FormControl(5, [Validators.required]),
      Search: new FormControl('', [Validators.required])
    })
  }
  searchSelected(item: string) { console.log(item); this.searchCriteria = item }
  sortSelected(item: string) { this.sortBy = item }

  submitDisable() {
    var disable = (this.searchCriteria != '' && this.sortBy != '' && !this.paginatorForm.invalid) ? false : true;
    return disable
  }
  onSubmit() {
    this.APIDATA = []
    this.http.get(`api/employee/${this.searchCriteria}/${this.paginatorForm.value.Search}/${this.sortBy}/${this.paginatorForm.value.Offset}/${this.paginatorForm.value.Limit}`)
      .subscribe((res: any) => {
        res.result.forEach((element: IUser) => {
          this.APIDATA.push(element)
        });
        console.log(this.APIDATA)
      })
  }

}
