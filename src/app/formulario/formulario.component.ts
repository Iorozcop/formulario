import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {

formulario: FormGroup;

  constructor(public formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      nombre: [''],
      email: ['', [Validators.required,Validators.email]],
      check: ['', Validators.required],
    });
  }
   
  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.formulario.value);
    alert('Formulario enviado con éxito');
  }
}
