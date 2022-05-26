import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GenericCrudService} from "../../services/generic-crud.service";
import {Contact} from "../../Entities/contact";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @Input()
  office: string | undefined;
  formGroup: FormGroup;
  constructor(private fb: FormBuilder, private crudservice: GenericCrudService<any, number>) {
    this.formGroup = this.fb.group({
      mail: ['', Validators.compose([Validators.required])],
      name: ['', Validators.compose([Validators.required])],
      message: ['', Validators.compose([Validators.required])],
    });
  }

  ngOnInit(): void {
  }

  get mail(): AbstractControl | null { return this.formGroup.get('mail'); }
  get name(): AbstractControl | null { return this.formGroup.get('name'); }
  get message(): AbstractControl | null { return this.formGroup.get('message'); }


  submit(): void{
  const contact : Contact = {
    name: this.name?.value,
    subject: "Contact for " + this.office ,
    mail: this.mail?.value,
    message: this.message?.value,
    template: 'office'
  }
    this.crudservice.save(contact, 'mail').subscribe(
      (er)=> console.log(er),
      (er)=> console.log(er)
    );

    this.formGroup.reset();
  }
}
