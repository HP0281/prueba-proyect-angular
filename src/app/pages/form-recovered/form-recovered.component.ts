import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { recovered } from 'src/app/models/recovered.model';
import { ServiceRecoveredService } from 'src/app/services/service-recovered.service';

@Component({
  selector: 'app-form-recovered',
  templateUrl: './form-recovered.component.html',
  styleUrls: ['./form-recovered.component.css']
})
export class FormRecoveredComponent implements OnInit {
  recoveredform: FormGroup;
  recovered: recovered;
  idstatus: boolean;
  constructor(private fb: FormBuilder, private router: Router, private dbRecobered: ServiceRecoveredService) { 
    const navigation = router.getCurrentNavigation();
    this.recovered = navigation?.extras?.state?.value;
    console.log(this.recovered);
    this.initform();
  }

  ngOnInit(): void {
    if(typeof this.recovered === 'undefined'){
      this.router.navigate(['newRecovered']);
      
    }else{
      
      this.recoveredform.patchValue(this.recovered);
    }
  }
  private initform():void{
    this.recoveredform = this.fb.group({
      id: [''],
      name: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required])
    }
    )
  }
  guardar(){
    if(this.recoveredform.valid){
      const recoveredValue = this.recoveredform.value;
      const recoveredId = this.recovered?._id || null;
      console.log(recoveredId);
      if (recoveredId != null) {
        this.dbRecobered.editRecovered(recoveredId, recoveredValue).subscribe(
          response => {
            alert("Registro editado");
            console.log("editando recovered");
          }
        );
      }else{
        this.dbRecobered.createRecovered(recoveredValue).subscribe(
          response => {
            alert("Registro creado")
            console.log("creando recovered");
          }
        );
        this.recoveredform.reset();
      }
    }
  }
  onvolver(){
    this.router.navigate(['listRecovered']);
  }
}
