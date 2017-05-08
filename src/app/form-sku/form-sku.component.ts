import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'form-sku',
  templateUrl: './form-sku.component.html',
  styleUrls: ['./form-sku.component.css']
})
export class FormSkuComponent implements OnInit {
  form:FormGroup;
  sku:any;
  productName:string;
  constructor(formBuilder:FormBuilder) {
    this.form=formBuilder.group({
      'sku':['ABC123',Validators.required],
      'productName': ['', Validators.required]
    });
    this.sku = this.form.controls['sku'];
   }

  ngOnInit() {
  }

  onSubmit(form:any):void{
    console.log('you submitted value:',form);
  }

}
