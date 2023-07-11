import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-edit-application',
  templateUrl: './edit-application.component.html',
  styleUrls: ['./edit-application.component.css']
})
export class EditApplicationComponent implements OnInit{

  editForm = new FormGroup({
    name:new FormControl(""),
    number:new FormControl(""),
    email:new FormControl(""),
    gender:new FormControl(""),
    nationality:new FormControl(""),
    dob:new FormControl(""),
    age:new FormControl(""),
    aadhar:new FormControl(""),
    loan:new FormControl(""),
    propertySqft:new FormControl(""),
    builderName:new FormControl(""),
    propertyValue:new FormControl(""),
    annualSalary1:new FormControl(""),
    loanAmount1:new FormControl(""),
    loanDuration1:new FormControl(""),
    address:new FormControl(""),
    companyname:new FormControl(""),  
    experience:new FormControl(""),  
    emiamount:new FormControl(""),
    annualSalary2:new FormControl(""),
    loanAmount2:new FormControl(""),
    loanDuration2:new FormControl(""),

  });

  constructor(private edit:CommonService, private router:ActivatedRoute){}

  showFields1: boolean = false;
  showFields2: boolean = false;

  inputfields(){
    if(this.editForm.controls.loan.value == "Home Loan"){
      this.showFields1 = true;
    }
    else{
      this.showFields1 = false;
    }
    if(this.editForm.controls.loan.value == "Personal Loan"){
      this.showFields2 = true;
    }
    else{
      this.showFields2 = false;
    }
    
  }


  ngOnInit(): void {
    this.fetchData();
   
  }

  fetchData(){
    this.edit.fetchData(this.router.snapshot.params['id']).subscribe((resp:any) =>{
      this.editForm = new FormGroup({
        name:new FormControl(resp['name']),
        number:new FormControl(resp['number']),
        email:new FormControl(resp['email']),
        gender:new FormControl(resp['gender']),
        nationality:new FormControl(resp['nationality']),
        dob:new FormControl(resp['dob']),
        age:new FormControl(resp['age']),
        aadhar:new FormControl(resp['aadhar']),
        loan:new FormControl(resp['loan']),
        propertySqft:new FormControl(resp['propertySqft']),
        builderName:new FormControl(resp['builderName']),
        propertyValue:new FormControl(resp['propertyValue']),
        annualSalary1:new FormControl(resp['annualSalary1']),
        loanAmount1:new FormControl(resp['loanAmount1']),
        loanDuration1:new FormControl(resp['loanDuration1']),
        address:new FormControl(resp['address']),
        companyname:new FormControl(resp['companyname']),  
        experience:new FormControl(resp['experience']),  
        emiamount:new FormControl(resp['emiamount']),
        annualSalary2:new FormControl(resp['annualSalary2']),
        loanAmount2:new FormControl(resp['loanAmount2']),
        loanDuration2:new FormControl(resp['loanDuration2']),
       
      });
    });
  }

  update(){
    this.edit.putApplication(this.router.snapshot.params['id'], this.editForm.value).subscribe((resp:any) =>{
      console.log(resp);
      alert("Application Updated...");
    });
  }

  // setTimeout(() => {
  //   setTimeout(() =>{
  //     this.router.navigateByUrl("/ViewApplication")
  //   })
  // }, 3000);

}

