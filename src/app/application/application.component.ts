import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, PatternValidator, Validators } from '@angular/forms';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
  data: any;
  detail: any;


  addForm = this.formbuilder.group({
    name:new FormControl("",[Validators.required,Validators.pattern('[a-z]')]),
    email:new FormControl("", [Validators.required, Validators.email]),
    number:new FormControl("", [Validators.required, Validators.min(10), Validators.max(10)]),
    nationality:new FormControl("", Validators.required),
    gender:new FormControl("", Validators.required),
    dob:new FormControl("", Validators.required),
    age:new FormControl("", Validators.required),
    aadhar:new FormControl("", Validators.required),
    address:new FormControl("", Validators.required),
    loan:new FormControl("", Validators.required),
    propertySqft:new FormControl("", Validators.required),
    builderName:new FormControl("", Validators.required),
    propertyValue:new FormControl("", Validators.required),
    annualSalary1:new FormControl("", Validators.required),
    loanAmount1:new FormControl("", Validators.required),
    loanDuration1:new FormControl("", Validators.required),
    companyname:new FormControl("", Validators.required),
    experience:new FormControl("", Validators.required),
    emiamount:new FormControl("", Validators.required),
    annualSalary2:new FormControl("", Validators.required),
    loanAmount2:new FormControl("", Validators.required),
    loanDuration2:new FormControl("", Validators.required)
  })

  //form validation

submitted:boolean = false;

  constructor(private link:CommonService, private formbuilder:FormBuilder){}


  ngOnInit(): void {
    this.applicationData();
    this.inputfields();
  }

  get add(){
    return this.addForm.controls
  }

  applicationData(){
   return this.link.getApplication().subscribe((resp) => {
      this.data = resp;
    });
  }

  showFields1:boolean = false;
  showFields2:boolean = false;


  inputfields() {
    if (this.addForm.controls.loan.value == "Home Loan") {
      this.showFields1 = true;
      this.addForm.controls['propertySqft'].setValidators([Validators.required]);
      this.addForm.controls['propertySqft'].updateValueAndValidity();
      this.addForm.controls['builderName'].setValidators([Validators.required]);
      this.addForm.controls['builderName'].updateValueAndValidity();
      this.addForm.controls['propertyValue'].setValidators([Validators.required]);
      this.addForm.controls['propertyValue'].updateValueAndValidity();
      this.addForm.controls['annualSalary1'].setValidators([Validators.required]);
      this.addForm.controls['annualSalary1'].updateValueAndValidity();
      this.addForm.controls['loanAmount1'].setValidators([Validators.required]);
      this.addForm.controls['loanAmount1'].updateValueAndValidity();
      this.addForm.controls['loanDuration1'].setValidators([Validators.required]);
      this.addForm.controls['loanDuration1'].updateValueAndValidity();
    }
    else {
       this.showFields1 = false;
       this.addForm.controls['propertySqft'].setValidators(null);
       this.addForm.controls['propertySqft'].updateValueAndValidity();
       this.addForm.controls['builderName'].setValidators(null);
       this.addForm.controls['builderName'].updateValueAndValidity();
       this.addForm.controls['propertyValue'].setValidators(null);
       this.addForm.controls['propertyValue'].updateValueAndValidity();
       this.addForm.controls['annualSalary1'].setValidators(null);
       this.addForm.controls['annualSalary1'].updateValueAndValidity();
       this.addForm.controls['loanAmount1'].setValidators(null);
       this.addForm.controls['loanAmount1'].updateValueAndValidity();
       this.addForm.controls['loanDuration1'].setValidators(null);
       this.addForm.controls['loanDuration1'].updateValueAndValidity();
       

    }
    if (this.addForm.controls.loan.value == "Personal Loan") {
      this.showFields2 = true;
      this.addForm.controls['companyname'].setValidators([Validators.required]);
      this.addForm.controls['companyname'].updateValueAndValidity();
      this.addForm.controls['experience'].setValidators([Validators.required]);
      this.addForm.controls['experience'].updateValueAndValidity();
      this.addForm.controls['emiamount'].setValidators([Validators.required]);
      this.addForm.controls['emiamount'].updateValueAndValidity();
      this.addForm.controls['annualSalary2'].setValidators([Validators.required]);
      this.addForm.controls['annualSalary2'].updateValueAndValidity();
      this.addForm.controls['loanAmount2'].setValidators([Validators.required]);
      this.addForm.controls['loanAmount2'].updateValueAndValidity();
      this.addForm.controls['loanDuration2'].setValidators([Validators.required]);
      this.addForm.controls['loanDuration2'].updateValueAndValidity();
    }
    else {
       this.showFields2 = false;
       this.addForm.controls['companyname'].setValidators(null);
       this.addForm.controls['companyname'].updateValueAndValidity();
       this.addForm.controls['experience'].setValidators(null);
       this.addForm.controls['experience'].updateValueAndValidity();
       this.addForm.controls['emiamount'].setValidators(null);
       this.addForm.controls['emiamount'].updateValueAndValidity();
       this.addForm.controls['annualSalary2'].setValidators(null);
       this.addForm.controls['annualSalary2'].updateValueAndValidity();
       this.addForm.controls['loanAmount2'].setValidators(null);
       this.addForm.controls['loanAmount2'].updateValueAndValidity();
       this.addForm.controls['loanDuration2'].setValidators(null);
       this.addForm.controls['loanDuration2'].updateValueAndValidity();

    }

  }

  save(){
    //validation
     
     this.submitted=true;
      if(this.addForm.valid){
         this.link.postApplication(this.addForm.value).subscribe((resp) =>{
          console.log(resp);
          this.detail = resp;
          alert("Applied Successfully...!");        
          window.location.reload();
        });
      }
  }
}


