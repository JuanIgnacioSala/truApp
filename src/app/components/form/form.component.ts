
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare let Email : any;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  contact : FormGroup;
  mailSend= 'juanignaciosala14@gmail.com'


  constructor( private fb: FormBuilder) { 

  this.createForm();

  }

  ngOnInit(): void {
  }

  get noValidName(){
    return this.contact.get('name').invalid && this.contact.get('name').touched;
  }
  get noValidLastname(){
    return this.contact.get('lastname').invalid && this.contact.get('lastname').touched;
  }
  get noValidMail(){
    return this.contact.get('mail').invalid && this.contact.get('mail').touched;
  }

  
  createForm(){
    this.contact = this.fb.group({
      name    :   ['', Validators.required],
      lastname:   ['', Validators.required],
      company :   [''],
      mail    :   ['', [Validators.email, Validators.required]],
      message :   ['']
    });
  }
   
  save(){
    
    if (this.contact.invalid) {
      return Object.values(this.contact.controls).forEach(control=>{
        control.markAsTouched();
      })
    }else{
        Email.send({
            SecureToken : "6c8668b7-7cf9-47e8-8acd-425c33e6274f",
        To : [this.mailSend, this.contact.value.mail],
        From : "juuanii.05@gmail.com",
        Subject : `Contact form - Name: ${this.contact.value.name} ${this.contact.value.lastname} `,
        
          Body : `<i>Contact info.</i> <br/> <b>Name: </b>${this.contact.value.name} <br /> <b>Lastname: </b>${this.contact.value.lastname}<br /> <b>Email: </b>${this.contact.value.mail}<br /> <b>Company: </b>${this.contact.value.company}<br /> <b>Message:</b> <br /> ${this.contact.value.message} <br><br> <b>~End of Message.~</b> `
        }
        )
        .then(
        message => {alert(message); this.contact.reset()});
      // CBAC3A67FFABC3C10553562BECFB7DEBEFDD
      // 6c8668b7-7cf9-47e8-8acd-425c33e6274f
      
    }

  }

  // resetForm(){
  //   this.contact.reset()
  // }

  

}
